//imports
import { Link } from "react-router-dom";
import myPhoto from '../assets/infjava/game4.png';

function Project4() {

  return (
    <>
    <div className='bg-zinc-900 min-h-screen font-[Inter] text-zinc-400 pl-20 pr-20 text-left text-white'>

      <div className='flex gap-25 text-2xl mt-10'>
        <Link to="/"><div className='text-gray-200 transition-ease hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
      </div>
      <h1 className="text-center text-5xl font-bold mt-30 text-zinc-200 ml-40 mr-40">Infinite Tile Editor Game</h1>
      <div className="mt-20 ml-40 mr-40">Over the course of this project, I developed a 2D tile-based game engine using JavaFX that allows users to both design levels and play them in real time. The system combines a level editor with a live game mode, creating a full pipeline from creation to execution. The goal was to build a flexible system where levels could be created dynamically, saved to a file, and then loaded into a playable environment with physics, collisions, and interactive features.</div>

      <div className="mt-20 text-xl font-bold text-zinc-200 ml-40">Problem</div>
      <div className="mt-5 ml-40 mr-40">Most beginner games hardcode levels directly into the program. This makes it difficult to scale or modify content without changing code. I wanted to design a system where level data is externalized, allowing users to build and edit levels visually, then immediately test them.</div>
      
      <div className="mt-20 text-xl font-bold text-zinc-200 ml-40">Solution</div>

      <div className="mt-5 ml-40 mr-40">I created a two-mode system:

A Tile Editor for designing levels
A Game Engine for playing them

The two modes are connected through file-based level data, allowing seamless transitions between editing and gameplay.</div>
      
      <div className="mt-20 mr-40 font-bold text-xl text-zinc-200 ml-40">Architecture Overview</div>
      
      <div className="mt-5 ml-40 mr-40">The project is built around a few core components:

GridPane → handles level editing and tile placement
GameLiveStage → runs the game loop and rendering
Player → physics, movement, and collision system
Camera → dynamic viewport following the player
Tile system → defines behaviors through features

This separation made the system modular and easier to extend.</div>
      
      <div className="mt-20 text-xl font-bold text-zinc-200 ml-40 mr-40">Level Data System</div>

      <div className="mt-5 ml-40 mr-40">Levels are stored in a simple text format, making them easy to edit and load:</div>

      <pre className='mr-40 ml-40 mt-10 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`grassTile, 7, 13
          groundTile, 10, 15
          hazard, 22, 16
          goal, 24, 7`}
        </code>
      </pre>


      <div className="mt-10 ml-40 mr-40">This approach allows the engine to dynamically construct the world at runtime instead of hardcoding layouts.</div>

      <div className="mt-20 mr-40 font-bold text-xl text-zinc-200 ml-40">Tile Editor (Grid System)</div>

      <div className="mt-5 ml-40 mr-40">The editor allows users to draw tiles directly onto a grid and save them to a file.</div>

      <pre className='mr-40 mt-10 ml-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`String key = tileName + "," + column + "," + row;
tileList.add(key);`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">Each tile is stored with its type and position, then grouped into sections for efficient rendering.</div>

      <img src={myPhoto} alt="description" className="w-125 ml-40 mr-40 mt-10"/>

      <div className="mt-20 text-xl font-bold text-zinc-200 ml-40 mr-40 mb-15">Chunk-Based Rendering</div>

      <div className="mt-5 ml-40 mr-40">To improve performance, tiles are grouped into sections (chunks), and only nearby chunks are rendered.</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`String sectionKey = (playerChunkX + dx) + "," + (playerChunkY + dy);
ArrayList<String> tileList = filledTiles.get(sectionKey);`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">This reduces unnecessary drawing and allows the game to scale to larger maps .</div>

      <div className="mt-20 font-bold text-xl text-zinc-200 ml-40 mr-40">Camera System</div>

      <div className="mt-5 ml-40 mr-40">The camera follows the player using a “deadzone” system, which prevents constant movement and creates smoother gameplay.</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`if (playerPosX < deadzoneStartX) {
            x = player.getCharacter().getX() - deadzoneStartX;
          }`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">This keeps the player centered without making the camera feel jittery.</div>

      <div className="mt-20 font-bold text-xl text-zinc-200 ml-40 mr-40">Player Physics + Collision</div>

      <div className="mt-5 ml-40 mr-40">The player system handles movement, gravity, jumping, and collision detection.</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`velocity = velocity.add(0, gravity);
yOffset += velocity.getY();`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">Collision detection checks the player against nearby tiles and adjusts movement accordingly</div>

      <div className="mt-20 font-bold text-xl text-zinc-200 ml-40 mr-40">Feature-Based Tile System</div>

      <div className="mt-5 ml-40 mr-40">One of the most interesting parts of this project is the feature system, where tiles define behavior dynamically.</div>

      <div className="mt-10 ml-40 mr-40">Examples:

death → kills player
end → wins game
break → disappears after time
velmod → changes movement speed</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`if (feature.equals("death")) {
            handleDeathFeature();
            setGameLost();
          }`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">This makes the engine extensible without modifying core logic.</div>

      <div className="mt-20 text-zinc-200 text-xl font-bold ml-40 mr-40">Rendering + Image Optimization</div>

      <div className="mt-10 ml-40 mr-40">To improve performance, images are cached instead of reloaded repeatedly.</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`if (!imageCache.containsKey(imageName)) {
            Image image = new Image(getClass().getResourceAsStream(imageName));
            imageCache.put(imageName, image);
          }`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">This significantly reduces rendering overhead .</div>

      <div className="mt-20 font-bold mr-40 text-xl text-zinc-200 ml-40">Game Loop</div>

      <div className="mt-5 ml-40 mr-40">The game uses JavaFX’s AnimationTimer to continuously update the game state.</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`public void handle(long currentTime) {
            gameScreen.animationEffects();
            gameScreen.refreshTiles();
          }`}
        </code>
      </pre>

      <div className="mt-10 ml-40">This drives movement, rendering, and interactions in real time.</div>

      <div className="mt-20 font-bold text-xl text-zinc-200 ml-40 mr-40">Editor ↔ Game Transition</div>

      <div className="mt-5 ml-40 mr-40">A key feature is the ability to switch between editing and playing instantly.</div>

      <pre className='mr-40 mt-10 ml-40 mr-40 bg-gray-900 text-purple-400 p-4 rounded-xl overflow-x-auto text-sm'>
        <code>
          {`textEditor.getStartButton().setOnAction(e -> {
            switchToGameScene();
            gameScreen.loadTilesFromFile();
          });`}
        </code>
      </pre>

      <div className="mt-10 ml-40 mr-40">This creates a smooth workflow for designing and testing levels.</div>

      <div className="mt-20 font-bold text-xl text-zinc-200 ml-40 mr-40">What I Learned</div>

      <div className="mt-5 ml-40 mr-40">This project gave me a deeper understanding of:

Game loops and real-time systems
Physics and collision detection
File-based data systems
Rendering optimization techniques
Designing modular systems

I also learned how to build systems that separate logic, data, and presentation cleanly.</div>

      <div className="mt-20 font-bold text-xl text-zinc-200 mr-40 ml-40">Final Thoughts</div>

      <div className="mt-5 ml-40 mr-40 mb-10">This project pushed me to think beyond simple programs and start building systems. It reinforced the importance of scalability, performance, and clean architecture when developing interactive applications.</div>
    </div>
    </>
  );
}

export default Project4;