import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BackgroundImage from '../components/BackgroundImage';
import './MyWordsPage.css';

// My Words page with typewriter effect
const MyWordsPage = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  const fullText = `My Dearest Cutie💖,

Ee letter raayatam start chesina ventane yedho manchi feel.
Endukante nuvvu na life lo entha important oo words lo cheppadam easy kaadu…

Asal idhe evaraina rastunnapudu chusthe nene anukunta entra cringe ani. Hmmm chudu na dakha vaste kani teliyala ilanti vatillo yentha manchi feel untadho ani.

Ee year ni gurthu chesukunte, first mind loki vachchedi nuvvu inka Job aa.
na happy moments ki double happiness nuvve.
Roju call chestha.
Endukante nuvvu naaku antha important.
Oka roju kuda ni tho matladakapothe, aa roju motham yedho heavy ga untundi.

Bhavyasri…
Naku telusu.
Future lo ni life lo marriage untundi.
Ni journey lo inkokaru pakkana untaru.
Idi cheppadam painful, kani idi kuda nijame.

Ee istam yedho destination kosam kaadu,
oka manchi beautiful journey kosam.
Nammuthavo ledho kani Nuvvu na life loki vachhi
nannu better man ga marchav.
Patience, anger issue ( Okkosari vastai but chala control ayyay) and inka many more.


Thank you Bhavyasri…
Na life lo oka beautiful chapter ayinanduku.
Na heart lo oka pure place occupy chesinanduku.

Nik chalamandi boys lo frnds undocchu, vallaki nuv ante istam kuda undochhu…
kani na world lo naku nuvve special.

Happy New Year cutie piee, Nxt yr inthakaminchi cheddam em antav?

itluuuu, ni yokka wastefellow💌

`;

  useEffect(() => {
    let index = 0;
    const typingSpeed = 30; // milliseconds per character

    const typeWriter = () => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
        setTimeout(typeWriter, typingSpeed);
      } else {
        setIsTypingComplete(true);
      }
    };

    typeWriter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="words-page">
      <BackgroundImage imageSrc="/images/words.jpg" opacity={0.15} />
      <div className="falling-hearts-bg">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="falling-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 5}s`,
            }}
          >
            💕
          </div>
        ))}
      </div>

      <motion.div
        className="words-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="letter-paper">
          <div className="letter-header">
            <div className="header-decoration">✨ 💕 ✨</div>
          </div>

          <div className="letter-content">
            <pre className="letter-text">{displayedText}</pre>
            {!isTypingComplete && <span className="typing-cursor">|</span>}
          </div>

          {isTypingComplete && (
            <motion.div
              className="letter-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="signature">❤️</div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default MyWordsPage;
