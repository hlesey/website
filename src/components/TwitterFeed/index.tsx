import React, { useEffect } from 'react';

declare global {
  interface Window {
    twttr: any;
  }
}

export default function TwitterFeed(): JSX.Element {
  useEffect(() => {
    // Load Twitter widgets script if not already loaded
    if (!window.twttr) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://platform.twitter.com/widgets.js';
      script.charset = 'utf-8';
      document.body.appendChild(script);

      script.onload = () => {
        if (window.twttr?.widgets) {
          window.twttr.widgets.load();
        }
      };
    } else if (window.twttr?.widgets) {
      // Reload widgets if script is already loaded
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="twitter-feed">
      <a 
        className="twitter-timeline" 
        data-height="600"
        data-tweet-limit="10"
        data-theme="light"
        data-border-color="#e1e8ed"
        data-chrome="noheader nofooter noborders transparent"
        href="https://twitter.com/CloudNativeFdn?ref_src=twsrc%5Etfw"
      >
        Tweets by CloudNativeFdn
      </a>
    </div>
  );
}