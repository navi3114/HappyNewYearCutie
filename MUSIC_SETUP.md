# 🎵 Music Setup Guide

Your website now supports different songs for each page!

## 📁 Folder Structure

Create a `music` folder inside the `public` folder:

```
public/
  └── music/
      ├── landing.mp3    (Landing page)
      ├── story.mp3      (Our Story page)
      ├── gallery.mp3    (Gallery page)
      ├── words.mp3      (My Words page)
      ├── reasons.mp3    (Reasons page)
      └── surprise.mp3   (Surprise page)
```

## 🎶 How to Add Your Songs

### Step 1: Create the music folder
1. Go to `public` folder in your project
2. Create a new folder named `music`

### Step 2: Add your music files
1. Get 6 romantic songs (MP3 format recommended)
2. Rename them to match the page names:
   - `landing.mp3` - For the entrance/welcome page
   - `story.mp3` - For the Our Story page
   - `gallery.mp3` - For the Gallery page
   - `words.mp3` - For the My Words/letter page
   - `reasons.mp3` - For the Reasons I Love You page
   - `surprise.mp3` - For the final surprise page
3. Copy all files into the `public/music/` folder

### Step 3: Test
1. Run `npm start`
2. Click the music button (top-right corner)
3. Navigate between pages - the song should change automatically!

## 🎼 Song Suggestions for Each Page

**Landing Page** (`landing.mp3`)
- Soft, romantic intro music
- Something magical and dreamy
- Example: "A Thousand Years" (instrumental)

**Our Story** (`story.mp3`)
- Nostalgic, emotional
- Something that reminds you of your journey
- Example: "Perfect" by Ed Sheeran

**Gallery** (`gallery.mp3`)
- Upbeat, happy, joyful
- Celebration of memories
- Example: "Just the Way You Are" by Bruno Mars

**My Words** (`words.mp3`)
- Deep, emotional, heartfelt
- Piano or acoustic versions work well
- Example: "All of Me" by John Legend

**Reasons** (`reasons.mp3`)
- Sweet, playful, cute
- Example: "Lucky" by Jason Mraz

**Surprise** (`surprise.mp3`)
- Grand, celebratory, emotional climax
- Example: "Marry You" by Bruno Mars

## 🎵 Where to Get Music

### Free & Legal Options:
1. **YouTube Audio Library** (Royalty-free)
   - https://studio.youtube.com/channel/UC.../music

2. **Bensound** (Free with attribution)
   - https://www.bensound.com/

3. **Free Music Archive**
   - https://freemusicarchive.org/

4. **Incompetech** (Royalty-free)
   - https://incompetech.com/

### Using Your Own Music:
- Download from Spotify/Apple Music (for personal use only)
- Use any MP3 files you own
- Convert YouTube videos to MP3 (use online converters)

## 💡 Tips

1. **Keep file sizes reasonable** (3-5 MB per song)
   - Use online MP3 compressors if files are too large
   
2. **Test volume levels**
   - Make sure all songs are similar volume
   - Use Audacity (free) to normalize audio if needed

3. **Format**
   - MP3 is best for web (widely supported)
   - Make sure files are named exactly as shown above

4. **Same songs OK**
   - If you want the same song on multiple pages, just copy the file and rename it

## 🔧 Troubleshooting

**Music not playing?**
- Check folder name is exactly `music` (lowercase)
- Check file names match exactly (lowercase, .mp3 extension)
- Check browser console for errors (F12)
- Make sure files are in `public/music/` not `src/music/`

**Music doesn't change between pages?**
- Clear browser cache (Ctrl+Shift+R)
- Check that each file name is unique
- Verify all 6 files are present

**Can I use different formats?**
- The code currently supports MP3
- You can add other formats (OGG, M4A) by updating the file extensions

## 🎯 Quick Command (Create folder)

Windows PowerShell:
```powershell
mkdir public\music
```

Mac/Linux Terminal:
```bash
mkdir public/music
```

---

**Note**: Once music files are added, the music will automatically switch when navigating between pages while keeping the play/pause state. If music is playing when you switch pages, the new song will start automatically! 🎵💕
