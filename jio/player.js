        function getQueryParam(name) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(name);
        }
        
        const ref = getQueryParam('ref');
        if (ref) {
            jwplayer("player").setup({
                file: `https://binge-top.vercel.app/cors?url=https://live.drmlive-02.workers.dev/${ref}`,
                type: "hls",
                width: "100%",
                aspectratio: "16:9",
                autostart: true,
            });
        } else {
            document.body.innerHTML = '<h2 style="color: white; text-align: center;">Access Denied!!!</h2>';
        }
