import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/ProductModel.js';

const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, bestseller, sizes } = req.body;

    // Parse sizes (handle both JSON strings and invalid formats)
    let sizesArray;
    if (typeof sizes === 'string') {
      try {
        // Replace single quotes with double quotes to make it valid JSON
        const sanitizedSizes = sizes.replace(/'/g, '"');
        sizesArray = JSON.parse(sanitizedSizes);
      } catch (error) {
        // If parsing fails, assume it's a comma-separated string
        sizesArray = sizes.split(',').map((size) => size.trim().replace(/['"]/g, ''));
      }
    } else if (Array.isArray(sizes)) {
      // If sizes is already an array, use it directly
      sizesArray = sizes;
    } else {
      // Handle unexpected format
      throw new Error('Invalid format for sizes');
    }

    // Handle images
    const image1 = req.files.image1 && req.files.image1[0];
    const image2 = req.files.image2 && req.files.image2[0];
    const image3 = req.files.image3 && req.files.image3[0];
    const image4 = req.files.image4 && req.files.image4[0];

    // Filter out undefined images
    const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

    // Upload images to Cloudinary
    let imagesURL = [];
    if (images.length > 0) {
      imagesURL = await Promise.all(
        images.map(async (item) => {
          try {
            const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
            return result.secure_url;
          } catch (uploadError) {
            console.error('Error uploading image to Cloudinary:', uploadError);
            return null; // Return null for failed uploads
          }
        })
      );
    }

    // Prepare product data
    const productData = {
      name,
      description,
      category,
      price: Number(price),
      subCategory,
      bestseller: bestseller === "true" ? true : false,
      sizes: sizesArray,
      image: imagesURL.filter((url) => url !== null), // Filter out null values (failed uploads)
      date: Date.now(),
    };

    // Log product data for debugging
    console.log(productData);

    // Save product to the database
    const product = new productModel(productData);
    await product.save();

    // Send response
    res.json({ success: true, message: 'Product added successfully'});
  } catch (error) {
    console.error('Error in addProduct:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const listProduct = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    console.error('Error in listProduct:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;

    
    if (!id) {
      return res.status(400).json({ success: false, message: 'Product ID is required' });
    }

    
    const deletedProduct = await productModel.findByIdAndDelete(id);

    
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, message: 'Product deleted successfully', data: deletedProduct });
  } catch (error) {
    console.error('Error in removeProduct:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};
const singleProduct = async (req, res) => {
  try {
    const { productId } = req.body;

    
    if (!productId) {
      return res.status(400).json({ success: false, message: 'Product ID is required' });
    }

    
    const product = await productModel.findById(productId);

    
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    res.json({ success: true, data: product });
  } catch (error) {
    console.error('Error in singleProduct:', error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { addProduct, listProduct, removeProduct, singleProduct };