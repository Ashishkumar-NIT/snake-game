# 🐍 Snake Game

A classic snake game built with vanilla HTML, CSS, and JavaScript. Control your snake to eat food, grow longer, and achieve the highest score!

## ✨ Features

- **Arrow Key Controls** - Use arrow keys to move the snake in four directions
- **Dynamic Grid** - Game board automatically adjusts to screen size
- **Food Mechanics** - Food appears randomly on the grid; eat it to grow and score points
- **Collision Detection** - Game ends when the snake hits the walls
- **Score Tracking** - Real-time score display and high score persistence
- **Timer** - Game timer shows elapsed time in minutes and seconds
- **High Score Storage** - Your best score is saved locally using localStorage
- **Modern UI** - Sleek dark theme with hexagonal HEXCO font styling
- **Game Controls** - Start and Restart buttons for easy game management
- **Modal System** - Welcome and Game Over modals for better UX

## 🎮 How to Play

1. **Start the Game** - Click the "Start Game" button
2. **Move the Snake** - Use the arrow keys:
   - ⬆️ `Arrow Up` - Move up
   - ⬇️ `Arrow Down` - Move down
   - ⬅️ `Arrow Left` - Move left
   - ➡️ `Arrow Right` - Move right
3. **Eat the Food** - Guide your snake to the red food blocks
4. **Grow & Score** - Each food eaten adds 10 points and grows your snake
5. **Avoid Walls** - Don't let your snake hit the walls or it's game over!
6. **Beat Your Record** - Try to beat your high score!

## 🎯 Game Mechanics

### Scoring System

- **+10 points** for each food consumed
- High score automatically saved to browser storage
- High score persists even after closing the browser

### Snake Movement

- Snake starts at a random position with initial direction: right
- Snake moves continuously at 300ms intervals
- Each move extends the snake and removes the tail (unless food is eaten)

### Collision Detection

- **Wall Collision** - Game ends if snake goes beyond board boundaries
- **Food Detection** - Snake length increases when food is consumed
- **Self-Collision** - (Can be implemented as future enhancement)

### Food Spawning

- Food appears at random grid coordinates
- New food spawns after previous food is consumed
- Food position is completely random across the grid

## 📁 File Structure

```
snake-game/
├── index.html      # HTML structure and modal layouts
├── style.css       # Styling, grid layout, and animations
├── app.js          # Game logic and event handling
└── README.md       # Project documentation
```

### Key Files Explanation

**index.html**

- Contains the game board grid container
- Includes modals for start and game-over screens
- Displays score, high score, and timer information

**style.css**

- Grid-based board layout (50px x 50px blocks)
- Dark theme with custom color variables
- HEXCO font (Orbitron) for modern aesthetic
- Responsive design that adapts to screen size

**app.js**

- DOM element queries and event listeners
- Snake position and direction management
- Food spawning and collision logic
- Score and timer management
- Game state (start, playing, game over, restart)

## 🛠 Technologies Used

- **HTML5** - Semantic markup and game structure
- **CSS3** - Grid layout, flexbox, custom properties, animations
- **JavaScript (Vanilla)** - DOM manipulation, game logic, event handling
- **localStorage API** - High score persistence
- **Google Fonts** - HEXCO/Orbitron font integration

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Ashishkumar-NIT/snake-game.git
   cd snake-game
   ```

2. **Open in browser**

   - Simply double-click `index.html` or
   - Right-click and select "Open with" → your preferred browser

3. **No dependencies required** - Pure vanilla JavaScript!

## 💡 Game Features Breakdown

### DOM Events & Controls

- Keyboard listeners for arrow key input
- Click listeners for start and restart buttons
- Modal display/hide based on game state

### State Management

- `snake` - Array of segment objects with x, y coordinates
- `food` - Current food position
- `direction` - Current snake movement direction
- `score` - Current game score
- `highscore` - Best score stored in localStorage
- `time` - Elapsed game time

### Core Functions

**render()** - Main game loop

- Updates food display
- Calculates new head position based on direction
- Checks wall collisions
- Handles food consumption and scoring
- Updates snake position on grid
- Re-renders all snake segments

**restartgame()** - Game restart logic

- Resets snake to random starting position
- Clears previous food and snake visuals
- Resets score and timer
- Restarts the game intervals

## 📊 Game Variables

| Variable     | Type   | Purpose                        |
| ------------ | ------ | ------------------------------ |
| `snake`      | Array  | Array of snake segment objects |
| `food`       | Object | Current food position {x, y}   |
| `direction`  | String | Current movement direction     |
| `score`      | Number | Current game score             |
| `highscore`  | Number | Best score (localStorage)      |
| `rows`       | Number | Grid rows based on screen      |
| `cols`       | Number | Grid columns based on screen   |
| `blocks`     | Object | Reference to all grid elements |
| `intervalID` | Number | Game loop interval ID          |

## 🔄 Game Loop

1. Render food on grid
2. Calculate new head position based on direction
3. Check wall collision → Game Over if true
4. Check food collision → Increase score if true
5. Remove old snake visual
6. Update snake position
7. Render new snake visual
8. Repeat every 300ms

## 🎨 UI Components

- **Start Modal** - Welcome screen with start button
- **Game Board** - Dynamic grid of 50px blocks
- **Score Display** - Current score counter
- **High Score Display** - Best score achieved
- **Timer** - Elapsed time MM-SS format
- **Game Over Modal** - Shows when game ends with restart button

## 🚧 Future Improvements

- [ ] Self-collision detection (collision with own body)
- [ ] Difficulty levels with increasing snake speed
- [ ] Obstacle blocks to avoid
- [ ] Power-ups (speed boost, slow motion, etc.)
- [ ] Leaderboard with multiple player scores
- [ ] Sound effects and background music
- [ ] Touch controls for mobile devices
- [ ] Dark/Light theme toggle
- [ ] Pause/Resume functionality
- [ ] Save game state

## 📱 Browser Compatibility

Works on all modern browsers:

- Chrome/Chromium
- Firefox
- Safari
- Edge

## 👨‍💻 Author

**Ashish Kumar**

- GitHub: [@Ashishkumar-NIT](https://github.com/Ashishkumar-NIT)
- Repository: [snake-game](https://github.com/Ashishkumar-NIT/snake-game)

## 📄 License

This project is open source and available under the MIT License.

## 🎓 Learning Resources

This project demonstrates:

- DOM manipulation with vanilla JavaScript
- Event handling (keyboard and click events)
- CSS Grid layout for game boards
- State management in games
- LocalStorage API for data persistence
- Game loop implementation
- Collision detection logic

## 💬 Feedback & Contributions

Feel free to fork this project, submit issues, or create pull requests for improvements!

---

**Happy Gaming! 🎮**
