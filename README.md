# Wind Python Phone Web Build V2

This is a working website, not a static mock-up.

## Main changes

- The phone is centered and is the entire focal point.
- There is no external title or intro copy.
- The uploaded phone artwork is used as the lock-screen wallpaper.
- The phone has a working slide-to-unlock control.
- Clicking or dragging the slider unlocks the phone.
- The home screen uses the real local time and date.
- Every app icon is clickable.
- Bazinga and Wind Python are used inside the Episodes app icon.

## Open

Extract the ZIP completely, then open `index.html`.


## V3 background update

- Uses the newly supplied `phoneBG.png` artwork as the phone wallpaper.
- Applies it to both the locked and unlocked phone screens.
- Keeps the working slide-to-unlock control and live local time.


## V6 BazingaOS polish

- Rebuilt the custom cursor as a browser-friendly 32×32 PNG.
- Raised the unlocked home-screen clock and date.
- Shifted the app grid upward slightly.
- Darkened and softly blurred the unlocked wallpaper.
- Improved app-label legibility.
- Kept the dock and home indicator clear of the app text.


## V7 status-bar adjustment

- Raised the `WP` carrier label and battery percentage on the unlocked home screen.
- Kept the large BazingaOS clock and app layout unchanged.


## V8 animated cursor

- Replaced the static browser cursor with a custom BazingaOS HTML cursor.
- The cursor follows the mouse smoothly.
- Clicking makes it dip, squash and rotate slightly.
- Hovering over links and buttons gives it a subtle lift.
- Touch devices automatically keep their normal touch behaviour.


## V9 definitive status-bar fix

The WP and battery text were still low because a later CSS rule changed the status bar from absolute positioning to relative positioning. This version forces the unlocked status bar back to the top edge of the phone screen.


## V10 black-line fix

- Removed the unlocked-screen home indicator that was cutting through the Behind the Scenes label.
- The lock-screen slide control remains unchanged.


## V11 battery update

- Changed the BazingaOS battery display from 100% to 69% on both the lock screen and home screen.


## V12
- Added subtle, slow-moving cloud layers behind the phone.
- Clouds are low-opacity so the phone remains the focal point.
- Animation is intentionally slow (90-120 seconds) to create atmosphere rather than distraction.


## V13 desk scene

- Replaced the cloud background with a warm tabletop viewed from above.
- Added subtle Wind Python/Bazinga desk objects around the phone:
  - Bazinga sticky note
  - Pencil
  - Wind Python VHS tape
  - Small BazingaOS gadget
  - Coffee ring
- Re-centred the Meat Ups artwork inside its app icon.
- Added crisp HTML text for “Casual Dating for the Modern Man” so it remains readable.
- Desk objects hide on small mobile screens so the phone stays usable.


## V14 realistic workbench rebuild
- Replaced the grid-like desktop with layered, irregular wood grain and natural lighting.
- Rebuilt the surrounding props with softer shadows and fewer cartoon outlines.
- Added a mug, handwritten note, HB pencil, VHS cassette, circuit board and loose screws.
- Restored the original supplied Meat Ups artwork with no added text or overlays.
- Optically centred the Meat Ups image by moving it slightly upward.


## V15 cleanup
- Removed the coffee mug.
- Removed the coffee stain/ring.
- Removed the VHS tape.
- Restored the original supplied Meat Ups artwork with no added overlays.
- Repositioned the Meat Ups artwork upward and centred it within the app icon.


## V16 physical polish
- Replaced top-down screw heads with four side-on screws.
- Added one loose washer.
- Rotated the phone 3 degrees clockwise.
- Added a softer, deeper contact shadow beneath the phone.
- Kept only the supplied Meat Ups artwork and adjusted it upward for optical centring.
- Phone rotation is disabled on small screens for better usability.


## V19 landscape apps and mini game
- Game and Episodes now open in landscape phone layouts.
- Added a playable Flappy Bird-style Wind Python mini game.
- Uses the supplied Wind Python flying artwork unchanged.
- Supports mouse, touch, and spacebar controls.
- Added score, best score for the current session, restart flow, obstacle collision, and responsive layout.


## V20 game refinements
- Cropped transparent padding from the supplied Wind Python PNG.
- Preserved the artwork's original aspect ratio to remove distortion.
- Set rendered character size from the cropped source ratio (819 × 682).
- Replaced the broad collider with a tighter central-body collision rectangle.
- Added an always-visible crosshair cursor over the game and standard pointer cursors over buttons.
- Kept title, start, and retry overlays fully interactive.


## V21 character scale correction
- Reduced the Wind Python game character to exactly one-third of its V20 size.
- Preserved the cropped artwork's original aspect ratio.
- Collider scales with the new character dimensions.
- Slightly adjusted gravity and flap strength to suit the smaller sprite.
- Kept all cursor and overlay fixes from V20.


## V22 animated game sprite
- Converted the existing static Wind Python artwork into a lightweight five-frame in-game sprite animation.
- Added subtle flap-like squash, stretch, and bob motion without changing the original artwork.
- Reduced flight tilt to roughly ±8 degrees for cleaner movement.
- Enabled high-quality canvas image smoothing for sharper downscaling.
- Added half-pixel snapping to reduce shimmer and blur during motion.
- Retained the V21 size, collider, controls, and cursor fixes.


## V23 game repair and site-wide cursor
- Repaired the JavaScript syntax error that prevented the game from opening.
- Restored Start, Retry, mouse/touch, and spacebar gameplay.
- Connected the sprite-style animation to the live game loop.
- Start and Retry now launch with an immediate flap.
- Applied the same crosshair cursor across every page and interactive element.
- Retained the smaller character, tight collider, subtle animation, and reduced tilt.


## V24 custom cursor restoration
- Restored the supplied pixel-art PNG as the cursor across the entire website.
- Preserved crisp pixel edges with nearest-neighbour scaling.
- Removed the white background and saved it with transparency.
- Cursor size: 31 × 48px.
- Hotspot positioned at the top tip for accurate clicking.
- Removed all crosshair cursor overrides.
- Retained the repaired game and animated character from V23.


## V25 animated PNG cursor
- Restored the supplied PNG as a true animated site-wide cursor.
- Added press-down squash on mouse click.
- Added a short spring-back motion on release.
- Preserved crisp pixel rendering.
- Uses the top tip as the click point.
- Works across every page, button, overlay, and the game canvas.
- Automatically disables the custom cursor on touch-only devices.
- No game logic or page layout was changed.


## V26 cursor polish
- Added a subtle 7-degree rotation while clicking.
- Added a tiny counter-rotation during the spring-back release.
- Rebuilt the cursor transparency using edge-connected background removal.
- Exterior white background is transparent.
- Enclosed white sections inside the black outline remain solid white.
- Prevents website content from showing through the cursor artwork.
- Cursor remains 31 × 48px with crisp pixel rendering.
- No game logic or page layout was changed.


## V27 restrained cursor and Extras reliability fix
- Reduced the custom cursor by approximately 10%, from 31 × 48px to 28 × 43px.
- Replaced the strong rotation with a very subtle 1-degree click tilt.
- Reduced click squash to a tiny one-pixel change.
- Shortened the release animation to 90ms.
- Added page-show, focus, pointer-move, and DOM reinstallation safeguards.
- Fixed the cursor disappearing when navigating into Extras or restoring a page from browser cache.
- Preserved the solid-white interior and transparent exterior.
- No game logic, page content, or layouts were changed.


## V28 persistent cursor fix
- Removed cursor rotation completely.
- Kept only a subtle squash-and-release click motion.
- Rebuilt the cursor loader so it works on every page opened from the phone.
- Added page-show, focus, visibility, pointer, and DOM replacement recovery.
- Verified every HTML page loads both styles.css and cursor.js exactly once.
- Retained the 10% smaller cursor and solid-white interior.
- No game logic, page content, or layout changes were made.


## V29
- Cursor now rests at a permanent 4° angle for a more natural look.
- Click animation remains squash-only.


## V31 Meat Ups swipe prototype
- Rebuilt Meat Ups as a Tinder-style swipe game.
- Added Jamie Harding, Spencer McAllon, and Drew Mahaffey with supplied photos.
- Supports drag/swipe with mouse or touch.
- Added left/right buttons and keyboard arrow controls.
- Added NOPE and MEAT stamps.
- Added stacked-card animation and end-of-deck restart screen.
- Bios remain placeholders for later editing.


## V32 Meat Ups inside the phone
- Restored the complete desk and physical phone illusion on the Meat Ups page.
- The swipe game now runs entirely inside the existing phone screen.
- Added the supplied Meat Ups sausage logo at the top, uncropped.
- Removed the slogan from the header artwork.
- Added profile descriptions directly underneath each name.
- Retained swipe dragging, buttons, keyboard controls, stamps, and restart screen.


## V33 Meat Ups polish and Bazinga match
- Reduced the Meat Ups logo by approximately 30%.
- Removed the visible pink rectangle by making the logo background transparent.
- Matched the app background to the logo's exact pink (#f8d0dc).
- Moved the profile card and swipe controls higher.
- Added Bazinga, age 33, using the supplied profile image.
- Swiping right on Bazinga now triggers a scripted LET'S MEAT UP match.
- Added an in-phone message screen with Bazinga's first text.


## V34 Meat Ups button spacing and Bazinga conversation
- Increased the bottom control area so the swipe buttons no longer crowd the phone edge.
- Added extra top padding around the swipe buttons.
- Added an interactive message thread with Bazinga.
- Users can type a message and press Enter or the send arrow.
- Bazinga displays a typing indicator, then sends a contextual or rotating reply.
- User and Bazinga messages have distinct chat-bubble styles.


## V35 Bazinga final-profile story flow
- Moved Bazinga to the last card in the Meat Ups deck.
- Jamie, Spencer, and Drew now appear before Bazinga.
- Bazinga remains the only scripted match.
- Added a short pause before the LET'S MEAT UP reveal.
- The chat now progresses toward the Docking Iguana invitation.
- Bazinga can say: "Meat me at the Docking Iguana tonight at 9 PM."
- Bazinga also reveals that Sebastian Glitterdick is performing and Wind Python should be there.
- Added contextual replies for Wind Python, Docking Iguana, Sebastian, time, and event questions.


## V36 Fixed
- Restored all Meat Ups profile image assets.
- Shortened the photo area to create more room for the bottom controls.
- Enlarged the dedicated button row and bottom padding.
- Added varied Bazinga farewell responses.


## V40: Nathaniel Chase playable prototype
- Added a separate Pac-Man-inspired phone mini-game: `nathaniel-chase.html`.
- Wind Python collects pellets while three Nathaniel heads chase him.
- Blue water-pistol pickups make Nathaniel vulnerable for eight seconds.
- Includes score, three lives, victory state, keyboard controls and mobile D-pad controls.
- The existing `game.html` file remains in the build and was not deleted.
- The phone's first existing game link now opens Nathaniel Chase.


## V41: Character sprite update
- Replaced the circular player with the supplied Wind Python side-view artwork.
- Replaced the cropped Nathaniel heads with the supplied full Nathaniel character.
- Wind Python and Nathaniel now mirror horizontally when moving left or right.
- Up/down movement preserves each character's latest horizontal facing direction.
- Added subtle walking bob animation while preserving the upright character artwork.
- Water-pistol mode applies a blue frightened effect to Nathaniel.


## V42: Both mini-games restored
- Restored the original Wind Python Flight game as its own phone app.
- Kept Nathaniel Chase as a second, separate phone app.
- The home screen now contains both `WP FLIGHT` and `NATHANIEL CHASE`.
- No game files were removed or overwritten.


## V43: Slower chase and neater phone layout
- Slowed both Wind Python and Nathaniel in Nathaniel Chase from a 0.13-second movement step to 0.20 seconds.
- Removed the Behind the Scenes app from the phone home screen.
- Moved About Wind Python into that position and removed the duplicate About tile.
- The phone now has a neat nine-app layout.
- Replaced the generic Nathaniel Chase icon with a cropped head icon made from the supplied Nathaniel artwork.


## V44: Ready start and cleaner water-power effect
- Slowed Wind Python and Nathaniel slightly again, from a 0.20-second step to 0.23 seconds.
- Added a clearly marked Wind Python starting position.
- Pressing Start now shows a 1.4-second READY screen before movement begins.
- Removed the ring around Nathaniel during water power.
- Removed the blue full-screen tint so the maze keeps its normal colours.
- Nathaniel now alternates between his normal appearance and blue while water power is active.


## V45: Five Nathaniels victory objective
- The player now wins by catching five Nathaniels while SPLASH MODE is active.
- Added a `NATHANIELS 0/5` counter to the game HUD.
- Collecting all pellets no longer ends the game.
- The victory screen now reads `FIVE NATHANIELS CAPTURED`.
- Added the supplied `fartmouth.mp3` sound and play it when Start Game is pressed.


## V46: Smooth movement
- Wind Python and Nathaniel now interpolate smoothly between maze tiles instead of snapping instantly.
- Preserved the slower 0.23-second movement speed.
- Added smooth easing for starts and stops.
- Reduced the walking bob slightly so the sprites feel steadier while gliding.
- Respawns and captured Nathaniels reset cleanly without sliding in from old positions.


## V47: Arcade polish and character audio
- Added a proper `NATHANIEL CHASE` title screen with animated Wind Python and Nathaniel.
- Catching Nathaniel plays `Oh no, you got me`.
- Nathaniel winning plays `Yeah mad` once when Game Over appears.
- Sounds restart cleanly and do not stack.
- Added a quick spin-and-shrink capture animation before Nathaniel respawns.
- Added a five-head victory display with check marks.
- Victory now reads `NATHANIELS CAPTURED`, `5 / 5`, and `WIND PYTHON ESCAPES... FOR NOW`.
- No additional water-pistol visual effects were added.


## V48: Title chase and start fix
- Wind Python now runs from left to right across the title screen.
- Nathaniel follows behind him, creating a clear chase.
- Press Start now launches the game directly instead of opening a second start screen.
- Added Enter and Space as title-screen start controls.
- Hidden overlays can no longer intercept clicks.


## V49: Butt Burger pickups and restored title chase
- Rebuilt from the complete V41 asset package, then overlaid all current V48 game and website changes.
- Replaced every blue power-up with the supplied transparent Butt Burger artwork.
- Butt Burgers gently bob while waiting to be collected.
- Restored the title-screen sprites using their correct image paths.
- Wind Python runs left to right in front, with Nathaniel chasing closely behind.
- Press Start still launches the game directly.


## V50: Butt Burger pickup sound
- Added the supplied `collectsound.mp3` as the Butt Burger collection sound.
- The sound plays whenever Wind Python collects a Butt Burger.
- It restarts cleanly instead of overlapping with itself.
- All title-screen chase animation, character voices, smooth movement and win conditions remain intact.


## V51: Nathaniel title chase fix
- Rebuilt the title chase using transform-based animation for more reliable browser rendering.
- Wind Python runs left to right in front.
- Nathaniel is forced visible, slightly smaller, and follows directly behind.
- Corrected both title-screen sprite paths.
- Preserved Butt Burger pickups and all sound effects.


## V52: Reliable title chase and background music
- Replaced the damaged title-screen animation CSS with a clean animation block.
- Wind Python and Nathaniel now travel along exactly the same left-to-right route.
- Nathaniel begins one second after Wind Python, creating a consistent chase.
- Added the supplied Nathaniel game music as looping background music.
- Music begins when the game starts and stops on victory or game over.
- Preserved Butt Burger pickups and all existing voice and collection effects.


## V53: Landscape Episodes phone
- Rebuilt the Episodes page as a landscape phone interface.
- Preserved the website's timber background for visual continuity.
- Added five episode placeholders styled as phone apps.
- Double-clicking an episode app opens it inside the phone's video viewer.
- Added keyboard and double-tap support for accessibility and mobile use.
- Episode videos can later replace the placeholder content without redesigning the page.

## V54
- Exact home-screen tabletop gradient applied across every page.
- Episodes rebuilt as five floppy-disk app icons inside the landscape phone.
- Episode placeholders now open with a single click.
- Viewer remains entirely inside the phone.


## V55: Floppy icons and cursor repair
- Fixed the episode floppy icons by making the icon containers block-level.
- Prevented the five-column grid from crushing the floppy shapes.
- Restored the permanent Wind Python cursor to the Episodes page.
- Verified that cursor.js is loaded across every page.
- Preserved the unified tabletop background and single-click episode opening.


## V56: Shop product viewer
- Rebuilt the Shop as a landscape BazingaOS phone app.
- Added clickable T-shirt and mug product icons.
- A single click opens the selected item's detail page inside the phone.
- Added large real-product-image areas with placeholders for supplied photographs.
- Added descriptions, size selection for the T-shirt, and product detail sections.
- Added a future Add to Bag placeholder.
- Preserved the tabletop background and custom cursor.


## V57: Real Wind Python merchandise
- Added the supplied T-shirt, mug and tote bag product images.
- Expanded the Shop home screen from two products to three.
- Product icons now use the actual merchandise photographs.
- Each product opens its own detail page inside BazingaOS.
- Added real-image product descriptions and details.
- T-shirt size selection remains active.
- Preserved the tabletop background, landscape phone, single-click controls and custom cursor.


## V58: Pixel shop icons with real product pages
- Restored playful pixel-art icons on the Shop home screen.
- Added pixel T-shirt, mug and tote bag icons.
- Clicking an icon still opens the real supplied merchandise photograph.
- Preserved all product descriptions, T-shirt sizes, tabletop background and custom cursor.
