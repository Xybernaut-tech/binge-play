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
