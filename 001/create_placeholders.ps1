# Create profile image
$profileText = "Profile Photo"
magick -size 400x400 xc:#4a90e2 -fill white -pointsize 24 -gravity center -annotate 0 "$profileText" d:\proj\prof01\website\img\profile.jpg

# Create teaching activity images
for ($i = 1; $i -le 6; $i++) {
    $text = "Teaching $i"
    $outputPath = "d:\proj\prof01\website\img\teaching$i.jpg"
    magick -size 400x400 xc:#7b68ee -fill white -pointsize 24 -gravity center -annotate 0 "$text" $outputPath
}

# Create competency images
for ($i = 1; $i -le 6; $i++) {
    $text = "Comp $i"
    $outputPath = "d:\proj\prof01\website\img\comp$i.jpg"
    magick -size 400x400 xc:#5ac18e -fill white -pointsize 24 -gravity center -annotate 0 "$text" $outputPath
}

# Create service images
for ($i = 1; $i -le 6; $i++) {
    $text = "Service $i"
    $outputPath = "d:\proj\prof01\website\img\service$i.jpg"
    magick -size 400x400 xc:#ff6b6b -fill white -pointsize 24 -gravity center -annotate 0 "$text" $outputPath
}

Write-Host "Placeholder images created successfully!"