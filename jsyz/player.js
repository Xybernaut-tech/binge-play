        function getQueryParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
        
        const ref = getQueryParam('ref');
        if (ref) {
            jwplayer("player").setup({
                file: `https://binge-top.vercel.app/cors?url=https://live.drmlive-02.workers.dev/${ref}`,
                type: "hls",
                logo: {
          file: "https://i.ibb.co/mV12qP0r/Untitled-design-1-1-1.png",
          position: "bottom-right",
        },
                width: "100%",
                aspectratio: "16:9",
                autostart: true,
            });
        } else {
            document.body.innerHTML = '<h2 style="color: white; text-align: center;">Made by <a href="https://t.me/axtream_bingewav" target="_blank">@Axtream_Bingewav</a> with love ❤ </h2>';
        }

            // Show the alert
      if (confirm("Join Our Telegram Channel @Axtream_Bingewav for updates and more")) {
          // Redirect to the Telegram channel if 'OK' is clicked
          window.location.href = "https://t.me/axtream_bingewav";
      } else {
          // Close the alert if 'Cancel' is clicked (do nothing)
      }


(function() {
    const allowedDomains = [
        "bingewav-sports.netlify.app",
        "cricketsamay365.netlify.app",
        "editverseog.netlify.app",
        "cricket-nation.live",
        "cricketgroup.netlify.app",
        "crxcshivam.live",
        "binge-play.vercel.app",
        "champions-trophy.vercel.app",
        "sportifylive18.netlify.app"
    ];

    try {
        // Check if the page is embedded in an iframe
        if (window.top !== window.self) {
            // Extract the referrer domain
            const referrer = document.referrer;
            if (referrer) {
                const referrerDomain = new URL(referrer).hostname;

                // Allow embedding only if the domain is in the allowed list
                if (!allowedDomains.includes(referrerDomain)) {
                    document.body.innerHTML = `<h1 style="text-align:center; margin-top:20%; color:red;">Embedding not allowed!</h1>`;
                    throw new Error("Embedding not allowed on this domain.");
                }
            } else {
                // No referrer, block embedding
                document.body.innerHTML = `<h1 style="text-align:center; margin-top:20%; color:red;">Embedding not allowed!</h1>`;
                throw new Error("Embedding not allowed! No referrer detected.");
            }
        }
    } catch (error) {
        console.error("Error checking embed permissions:", error);
        document.body.innerHTML = `<div style="text-align:center; margin-top:20%; color:#ff3333; font-family:Arial, sans-serif;">
        <h1>Access Denied</h1>
        <p><h2>This page cannot be embedded on your site.</h2></p>
        <p><h2>For more information and to allow embeding on this domain, please contact the administrator <a href="https://t.me/axtream_bingewav" target="_blank" style="text-decoration: none; color: #ff00bb">@Axtream_Bingewav</a>.</h2></p>
    </div>`;
    }
})();
