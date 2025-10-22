#!/usr/bin/env python3
"""
Generate beautiful favicon files matching the homepage design
Requires: Pillow
"""

from PIL import Image, ImageDraw

def create_gradient_background(size):
    """Create an orange gradient background"""
    img = Image.new('RGBA', size, color=(255, 255, 255, 0))
    pixels = img.load()

    # Orange gradient: #f97316 -> #fb923c -> #fdba74
    for y in range(size[1]):
        for x in range(size[0]):
            progress = (x + y) / (size[0] + size[1])

            if progress < 0.5:
                r = int(249 + (251 - 249) * (progress * 2))
                g = int(115 + (146 - 115) * (progress * 2))
                b = int(22 + (60 - 22) * (progress * 2))
            else:
                r = int(251 + (253 - 251) * ((progress - 0.5) * 2))
                g = int(146 + (186 - 146) * ((progress - 0.5) * 2))
                b = int(60 + (116 - 60) * ((progress - 0.5) * 2))

            pixels[x, y] = (r, g, b, 255)

    return img

def draw_brain_icon(draw, center_x, center_y, scale=1.0):
    """Draw a beautiful brain icon"""
    sx, sy = center_x, center_y

    # Left hemisphere
    left_x = sx - 8 * scale
    left_y = sy - 2 * scale
    draw.ellipse([left_x - 6*scale, left_y - 8*scale, left_x + 6*scale, left_y + 8*scale],
                 fill=(255, 255, 255, 220))

    # Right hemisphere
    right_x = sx + 8 * scale
    right_y = sy - 2 * scale
    draw.ellipse([right_x - 6*scale, right_y - 8*scale, right_x + 6*scale, right_y + 8*scale],
                 fill=(255, 255, 255, 220))

    # Brain folds - left side
    for i in range(3):
        offset = i * 4 * scale
        draw.line([left_x - 4*scale + offset, left_y - 2*scale,
                   left_x - 2*scale + offset, left_y + 4*scale],
                  fill=(251, 146, 60, 150), width=max(1, int(1*scale)))

    # Brain folds - right side
    for i in range(3):
        offset = i * 4 * scale
        draw.line([right_x - 4*scale + offset, right_y - 2*scale,
                   right_x - 2*scale + offset, right_y + 4*scale],
                  fill=(251, 146, 60, 150), width=max(1, int(1*scale)))

    # Center line
    draw.line([sx, sy - 6*scale, sx, sy + 6*scale], fill=(251, 146, 60, 120), width=max(1, int(1*scale)))

def create_favicon_ico():
    """Create a 32x32 favicon.ico file"""
    size = (32, 32)
    img = create_gradient_background(size)
    draw = ImageDraw.Draw(img)

    draw_brain_icon(draw, 16, 14, scale=0.8)

    accent_x, accent_y = 24, 8
    draw.ellipse([accent_x - 3, accent_y - 3, accent_x + 3, accent_y + 3],
                 fill=(6, 182, 212, 200))

    img.save('public/favicon.ico', format='ICO', sizes=[(32, 32)])
    print("✓ Created public/favicon.ico (32x32)")

def create_apple_touch_icon():
    """Create a 180x180 apple-touch-icon.png file"""
    size = (180, 180)
    img = create_gradient_background(size)
    draw = ImageDraw.Draw(img)

    draw.ellipse([10, 10, 60, 60], fill=(255, 255, 255, 25))
    draw.ellipse([120, 120, 170, 170], fill=(255, 255, 255, 20))

    draw_brain_icon(draw, 90, 75, scale=4.5)

    accent_x, accent_y = 135, 45
    draw.ellipse([accent_x - 12, accent_y - 12, accent_x + 12, accent_y + 12],
                 fill=(6, 182, 212, 220))
    draw.ellipse([accent_x - 8, accent_y - 8, accent_x + 8, accent_y + 8],
                 fill=(34, 211, 238, 150))

    draw.ellipse([20, 140, 28, 148], fill=(6, 182, 212, 130))
    draw.ellipse([155, 160, 161, 166], fill=(6, 182, 212, 100))

    img.save('public/apple-touch-icon.png', format='PNG')
    print("✓ Created public/apple-touch-icon.png (180x180)")

if __name__ == '__main__':
    try:
        create_favicon_ico()
        create_apple_touch_icon()
        print("\n✓ All favicon files generated successfully!")
        print("✓ Design matches homepage theme with orange gradient and cyan accents")
    except Exception as e:
        print(f"✗ Error generating favicons: {e}")
        import traceback
        traceback.print_exc()

