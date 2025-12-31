# 📸 Gallery Photos Folder

## 🖼️ Image Specifications

### **Recommended Size:**
- **600 x 600 pixels** (square format)
- **Minimum:** 400 x 400 pixels
- **Maximum:** 1000 x 1000 pixels

### **Format:**
- JPG (best for photos)
- PNG (if you need transparency)
- WEBP (for smaller file size)

### **File Size:**
- Keep each photo under 500KB
- Compress using: TinyPNG.com or Squoosh.app

## 📁 Add Your Photos Here

Add 8 photos with these exact names:
```
public/gallery/
  ├── photo1.jpg
  ├── photo2.jpg
  ├── photo3.jpg
  ├── photo4.jpg
  ├── photo5.jpg
  ├── photo6.jpg
  ├── photo7.jpg
  └── photo8.jpg
```

## ✂️ How to Resize Photos

### Option 1: Online Tools (Free)
1. **Canva** (canva.com)
   - Upload photo → Resize → 600x600px → Download

2. **BeFunky** (befunky.com)
   - Photo Editor → Resize Image → 600x600px

3. **iLoveIMG** (iloveimg.com)
   - Resize Image → Custom Size → 600x600px

### Option 2: Windows
1. Right-click photo → Edit with Paint/Photos
2. Resize → Set dimensions to 600x600
3. Save

### Option 3: Mac
1. Open in Preview
2. Tools → Adjust Size
3. Set to 600x600 pixels
4. Save

## 💡 Tips

### Photo Selection:
- Mix close-ups and full shots
- Include happy moments, dates, trips
- Variety keeps it interesting

### Quality:
- Use well-lit photos
- Avoid blurry images
- Original photos work best (not screenshots)

### Cropping:
- Since boxes are square, crop photos to square format
- Center the important part (faces, moments)

### Order:
- photo1.jpg - Your first photo (special moment)
- photo2-7.jpg - Various memories
- photo8.jpg - Recent/favorite photo (ends on high note)

## 🎨 Editing (Optional)

Want to make photos look romantic?
- Add a soft pink filter
- Slightly increase brightness
- Use apps like VSCO, Snapseed, or Lightroom

## ➕ Adding More Photos

Want more than 8 photos? Edit the GalleryPage.js file:

```javascript
{
  id: 9,
  src: "/gallery/photo9.jpg",
  caption: "Your caption here 💕",
}
```

## 🔧 Troubleshooting

**Photos not showing?**
- Check filenames match exactly: photo1.jpg, photo2.jpg, etc.
- Files must be in `public/gallery/` folder
- Refresh browser (Ctrl+Shift+R)

**Photos look stretched?**
- Make sure images are square (same width and height)
- If rectangular, they'll be cropped automatically

**Page loads slowly?**
- Compress images to under 500KB each
- Use JPG format instead of PNG

---

**Current Setup**: Gallery displays 8 square photos in a responsive grid! 📸💕
