// script.js - JavaScript for BreathEase Website

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }
    
    // Product Image Gallery
    const mainImage = document.querySelector('.main-image-box img');
    const thumbnails = document.querySelectorAll('.thumbnail');
    
    if (thumbnails.length > 0) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Remove active class from all thumbnails
                thumbnails.forEach(t => t.classList.remove('active'));
                
                // Add active class to clicked thumbnail
                this.classList.add('active');
                
                // Update main image
                if (mainImage) {
                    const thumbnailImg = this.querySelector('img');
                    if (thumbnailImg) {
                        mainImage.src = thumbnailImg.src;
                        mainImage.alt = thumbnailImg.alt;
                    }
                }
            });
        });
    }
    
    // Collapsible Information Sections
    const collapsibleItems = document.querySelectorAll('.collapsible-info p');
    
    if (collapsibleItems.length > 0) {
        collapsibleItems.forEach(item => {
            item.addEventListener('click', function() {
                // Toggle active class for styling
                this.classList.toggle('active');
                
                // Find the content (next element after the heading)
                const content = this.nextElementSibling;
                
                // If there's no content element, create one
                if (!content || !content.classList.contains('collapsible-content')) {
                    // Create content div
                    const newContent = document.createElement('div');
                    newContent.classList.add('collapsible-content');
                    
                    // Add appropriate content based on the heading
                    const headingText = this.textContent.trim();
                    if (headingText.includes('Sizing information')) {
                        newContent.innerHTML = '<p>Our noseclip comes in three sizes: Small, Medium, and Large. Measure the width of your nostrils to determine the best fit.</p>';
                    } else if (headingText.includes('Free resizing')) {
                        newContent.innerHTML = '<p>If your noseclip doesn\'t fit perfectly, we offer free resizing within 30 days of purchase.</p>';
                    } else if (headingText.includes('Money back guarantee')) {
                        newContent.innerHTML = '<p>We offer a 60-day money-back guarantee. If you\'re not satisfied, return the product for a full refund.</p>';
                    }
                    
                    // Insert after the current element
                    this.parentNode.insertBefore(newContent, this.nextSibling);
                    
                    // Toggle visibility with animation
                    newContent.style.maxHeight = newContent.scrollHeight + 'px';
                } else {
                    // Toggle existing content
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                    } else {
                        content.style.maxHeight = content.scrollHeight + 'px';
                    }
                }
            });
        });
    }
    
    // Add to Cart Button Functionality
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            // Add animation/feedback
            this.textContent = 'Added to Cart!';
            this.style.backgroundColor = '#28a745'; // Green color for success
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.textContent = 'Add to Cart →';
                this.style.backgroundColor = '#ff8c00';
            }, 2000);
            
            // In a real application, you would add the product to a cart object or send to a server
            console.log('Product added to cart');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for fixed header
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                }
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                header.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
                header.style.background = 'rgba(255, 255, 255, 0.95)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                header.style.background = 'white';
            }
        });
    }
});