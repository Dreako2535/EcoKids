import React from 'react';

const Blog = ({ image, title, subtitle, text, color }) => {
  return (
    <div className={`blog-card bg-${color}`} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', marginBottom: '16px' }}>
      <img src={image} alt={title} style={{ width: "100%", height: "auto", borderRadius: '8px' }} />  {/* Imagen con estilo */}
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <p>{text}</p>
    </div>
  );
};

export default Blog;
