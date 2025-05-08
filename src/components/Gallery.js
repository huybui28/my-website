import React, { useState } from 'react';

const Gallery = () => {
    const [images] = useState([
        // Add the URLs of your 3D LEGO photos here
        'url-to-photo1.jpg',
        'url-to-photo2.jpg',
        'url-to-photo3.jpg',
    ]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="gallery">
            <h2>3D LEGO Gallery</h2>
            <div className="image-grid">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`LEGO Photo ${index + 1}`}
                        onClick={() => handleImageClick(image)}
                    />
                ))}
            </div>
            {selectedImage && (
                <div className="viewer">
                    <img src={selectedImage} alt="Selected LEGO" />
                    <button onClick={() => setSelectedImage(null)}>Close</button>
                </div>
            )}
        </div>
    );
};

export default Gallery;