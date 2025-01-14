    // Function to get query parameters
    function getQueryParam(param) {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
    }

    // Extract 'id' from the query parameter
    const id = getQueryParam("id");

    // Check if 'id' exists in the URL
    if (id) {
      const m3u8Url = `https://m3u8-proxy-with-cors.vercel.app/m3u8-proxy?url=https://unknownplaylists.vercel.app/opplex/play.m3u8?id=${id}&headers=%7B%22referer%22%3A%22%22%7D`;

      // JW Player configuration
      jwplayer("player-container").setup({
        file: m3u8Url,
        width: "100%",
        height: "100%",
        aspectratio: "16:9",
        autostart: true,
        logo: {
          file: "https://i.ibb.co/JkfNTs8/output-onlinepngtools.png",
          position: "bottom-left",
        },
        skin: {
          url: "https://cxh.pages.dev/style.css",
        }
      });
    } else {
      // Show the no-ID message
      document.getElementById("no-id-message").style.display = "flex";
    }


 // Close popup function
 function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
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
        "sportifylive.netlify.app"
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
        document.body.innerHTML = `<h1 style="text-align:center; margin-top:20%; color:red;">Ab to copy mat kr chutiye<br>Join us <a href="https://t.me/axtream_bingewav" style="text-decoration: none; color: yellow;" target="_blank">@Actream_Bingewav</a></h1>`;
    }
})();
