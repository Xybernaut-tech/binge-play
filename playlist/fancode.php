<?php
// Set headers to serve as an M3U playlist
header("Content-Type: audio/x-mpegurl");
header("Content-Disposition: inline; filename=fancode.m3u");

// URL of the source M3U file
$source_url = "https://raw.githubusercontent.com/drmlive/fancode-live-events/main/fancode.m3u";

// Fetch content from the source URL
$m3u_content = file_get_contents($source_url);

// Check if fetching was successful
if ($m3u_content === false) {
    echo "#EXTM3U\n";
    echo "#EXTINF:-1,Error: Unable to fetch the playlist.\n";
    echo "http://error-stream.invalid\n";
    exit;
}

// Output the fetched M3U content
echo $m3u_content;
?>
