
export let projectsSummary = [
    {
        id: 'pedestrian-intent',
        title: 'Autonomous Driving System',
        category: 'Machine Learning',
        description: "Developed a deep learning model for predicting the intention of pedestrians to step into a road from a car's front view. ",
        tags: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Python', 'Pytorch', 'OpenCV', 'Git', 'Data Handling', 'Model Evaluation'],
        image: 'images/pedestrian-intent/walker.png',
    },
    {
        id: 'mars-rover',
        title: 'Space Robotics Rover - Autonomous Navigation',
        category: 'Robotics',
        description: "Developed a robust mapping, navigation, and motion planning control system for the Mars rover to win the European Rover Challenge.",
        tags: ['Robotics', 'ROS', 'SLAM', 'Navigation', 'Path Planning', 'Sensor Fusion', 'Docker', 'Git'],
        image: 'images/mars-rover/mars-rover-cover.png',
    },
    {
        id: 'prosthetic-hand-control',
        title: 'Prosthetic Hand Control using Computer Vision',
        category: 'Robotics',
        description: "Developed a control system for a semi-autonomous prosthetic hand to enhance usability and reduce cognitive load for users.",
        tags: ['Robotics', 'Computer Vision', 'ROS', 'Python', 'C++', 'OpenCV', 'Gazebo Simulation'],
        image: 'images/prosthetic-hand-control/grasp-big-sphere.jpg',
    },
    {
        id: 'parking-sensor',
        title: 'Parking Sensor',
        category: 'Electronics',
        description: "Developed an ultrasonic parking sensor system with LED display and speaker.",
        tags: ['Electronics', 'Embedded Systems', 'C', 'Microcontrollers', '3D Printing', 'Circuit Design'],
        image: 'images/parking-sensor/parking_sensor_3D_model.png',
    },
    {
        id: 'packet-sending-protocol',
        title: 'Packet Sending Protocol',
        category: 'Software Engineering',
        description: "Developed a custom network protocol on top of UDP to ensure reliable, in-order file transfer",
        tags: ['Networks', 'Python', 'Socket Programming', 'UDP', 'TCP', 'Protocol Design', 'CRC'],
        image: 'images/packet-sending-protocol/packet_sending_cover_photo.jpg',
    },
    {
        id: 'adc-pcb-design',
        title: 'PCB Design of ADC card',
        category: 'Electronics',
        description: "Designed a PCB for an ADC card, focusing on signal integrity and layout optimization.",
        tags: ['Electronics', 'PCB Design', 'KiCad', 'Signal Integrity', 'Layout Design'],
        image: 'images/adc-pcb-design/3d-model.png',
    },
];


export const projectsData = 
[
    {
        id: 'pedestrian-intent',
        title: 'Autonomous Driving System',
        category: 'Machine Learning',
        description: "Predicting the intention of pedestrians to step into a road from a car's front view using deep learning.",
        tags: ['ML', 'Deep Learning', 'Computer Vision', 'Python', 'Pytorch'],
        image: 'images/pedestrian-intent/methods-combined.png', // Main image for the hero section
        date: 'JUN 16, 2024',
        keyInfo: {
            role: "Machine Learning Engineer (Bachelor Thesis)",
            skills: ["Deep Learning", "Computer Vision", "Data Pipeline Automation", "Model Training & Evaluation", "Object Detection", "Object Tracking", "Semantic Segmentation"],
            technologies: ["Python", "PyTorch", "OpenCV", "Docker", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "CUDA"],
            goal: "Automatically label dashcam footage and train a model to predict pedestrian road-crossing intent.",
            result: "Achieved 74.4% prediction accuracy & 96.1% auto-labeling precision."
        },
        detailContent: `
            <h4>Core Challenge & Solution</h4>
            <p>This research focused on automatically finding moments when a pedestrian steps into a road by analyzing <strong>vehicle dashcam footage</strong>. The goal was to train a classifier capable of predicting, in real-time, whether a pedestrian intends to cross. This is crucial for <strong>autonomous driving</strong> and driver-assisting systems, enabling faster braking responses either by taking control or pre-activating the braking system.</p>
            <div class="bdd100k-image">
                <img src="images/pedestrian-intent/bdd100k.gif" alt="BDD100K Dataset Example">
                <figcaption>Example from the BDD100K driving dataset used for obtaining training data.</figcaption>
            </div>

            <h4>Implementation Details</h4>
            <p>The project involved two major components: an <strong>auto-labeling pipeline</strong> to generate training data automatically, and a <strong>classifier model</strong> designed and trained using this data.</p>

            <h4>Auto-labeling Pipeline</h4>
            <p>The pipeline leveraged state-of-the-art models: <strong>object detection</strong> (to find pedestrians), <strong>object tracking</strong> (to follow them across frames), and <strong>semantic segmentation</strong> (to identify road vs. sidewalk areas). Combining these allowed the system to automatically label moments where tracked pedestrians crossed from the sidewalk segment to the road segment.</p>
            <div class="auto-labeling-pipeline-images">
                    <figure><img src="images/pedestrian-intent/object-detection.png" alt="Object detection"><figcaption>Object Detection</figcaption></figure>
                    <figure><img src="images/pedestrian-intent/object-tracking.png" alt="Object tracking"><figcaption>Object Tracking</figcaption></figure>
                    <figure><img src="images/pedestrian-intent/semantic-segmentation.png" alt="Semantic segmentation"><figcaption>Semantic Segmentation</figcaption></figure>
                    <figure><img src="images/pedestrian-intent/methods-combined.png" alt="Methods combined"><figcaption>Combined Analysis</figcaption></figure>
            </div>
            <p>The high-level architecture involved processing video frames through each model sequentially, combining the outputs to generate the final labels.</p>
            <figure class="bdd100k-image">
                <img src="images/pedestrian-intent/scheme.jpg" alt="Autolabelling pipeline diagram">
                <figcaption>High-level architecture of the auto-labeling pipeline.</figcaption>
            </figure>
            <p>The GIF below demonstrates the pipeline in action, identifying pedestrians entering the roadway.</p>
            <figure class="bdd100k-image">
                <img src="images/pedestrian-intent/pedestrians-in-road.gif" alt="Pedestrians stepping into the road animation">
                <figcaption>Auto-labeling pipeline in action. The system identifies pedestrians crossing from the sidewalk (green bounding boxes) onto the road (red bounding boxes).</figcaption>
            </figure>

            <h4>Classifier Model</h4>
            <p>The classifier used an <strong>EfficientNet backbone</strong> for robust feature extraction from image sequences around the pedestrian, combined with a custom classifier head. Training utilized a cross-entropy loss function and SGD optimizer. <strong>Data augmentation and dropout</strong> techniques were employed to prevent overfitting.</p>
            <figure class="bdd100k-image">
                <img src="images/pedestrian-intent/classifier.png" alt="Classifier model architecture">
                <figcaption>Feedforward through the classifier model and its detailed architecture.</figcaption>
            </figure>

            <h4>Impact & Results</h4>
            <p>The auto-labeling pipeline achieved a <strong>precision of 96.15%</strong> and recall of 70.75%, proving its reliability for generating baseline training data.</p>
            <p>The final classifier, trained on this generated data, reached an <strong>overall accuracy of 74.41%</strong> on unseen validation data. This demonstrated strong generalization capabilities and significant potential for real-world implementation in early warning systems for autonomous vehicles. The work was successfully presented and defended as my Bachelor's thesis at the Czech Technical University in Prague.</p>
        `,
    },
    {
        id: 'mars-rover',
        title: 'Space Robotics Rover - Autonomous Navigation',
        category: 'Robotics',
        description: "Developed a robust mapping, navigation, and high-level motion planning control system for the Mars rover.",
        tags: ['Robotics', 'ROS', 'SLAM', 'Navigation', 'Path Planning', 'Sensor Fusion'],
        image: 'images/mars-rover/mars-rover-cover.png', 
        date: 'JAN 19, 2025',
        keyInfo: {
                role: "Robotics & Software Developer (Semester Project)",
                skills: ["SLAM", "Path Planning", "Sensor Fusion", "Autonomous Navigation", "Obstacle Avoidance", "Team Collaboration", "Hardware Integration"],
                technologies: ["ROS", "Python", "C++", "Docker", "RTAB-Map", "Nav2", "CUDA", "NVIDIA Isaac-Sim", "ZED Camera", "LiDAR"],
                goal: "Build a full-stack navigation system for the Mars rover to win the European Rover Challenge.",
            },
            detailContent: `
                <h4>Core Challenge & Solution</h4>
                <p>Our team's 7th-semester project tackled a classic robotics problem: how do you navigate a 3D world, like a rocky Mars yard, using a 2D path planner? The AAU Space Rover's previous system was mapless and couldn't navigate accurately. Our goal was to build a full-stack navigation system for the <strong>European Rover Challenge (ERC)</strong>.</p>
                <p>The core challenge was integrating <strong>RTAB-Map</strong>, which performs SLAM and builds a 3D map of the world, together with <strong>Nav2</strong> ROS navigation library, which relies on a 2D costmap. A direct flattening of the 3D map is an insufficient approach, as this discards critical information about terrain slope, elevation changes, and obstacles.</p>
                <p><strong>Our solution:</strong> We designed a custom <strong>"Traversability Mapping"</strong> ROS node. This C++ node acts as a bridge, subscribing to the 2.5D elevation map from RTAB-Map and converting it into a 2D costmap where the "cost" is the <strong>steepness of the terrain</strong>. This way, Nav2 could plan paths that avoided not just rocks, but also slopes that were too steep for the rover to climb.</p>
                
                <figure class="bdd100k-image" id="rover-hardware-figure">
                    <img src="images/mars-rover/rover-hardware.png" alt="Rover hardware and sensor components">
                    <figcaption>Overview of the Mars Rover setup, highlighting key components: the ZED stereo camera, motor controllers, and the differential drive system.</figcaption>
                </figure>

                <figure class="bdd100k-image">
                    <img src="images/mars-rover/system_diagram.png" alt="Rover System Architecture Diagram">
                    <figcaption>The system architecture diagram: The ZED camera feeds RTAB-Map for 3D SLAM. Our custom Traversability node subscribes to the 2.5D elevation map and converts it to a 2D occupancy grid, which Nav2 uses for path planning.</figcaption>
                </figure>

                <h4>The Bridge: Traversability Mapping</h4>
                <p>This custom node was the integral part of the project. It performed a multi-step processing pipeline in real-time:</p>
                <ol>
                    <li><strong>Get Map:</strong> Subscribes to the 2.5D elevation map from RTAB-Map.</li>
                    <li><strong>Pre-process:</strong> Fills small gaps in the map data and applies a <strong>Gaussian filter</strong> to smooth out sensor noise from the ZED camera.</li>
                    <li><strong>Calculate Steepness:</strong> Uses a <strong>finite difference approximation</strong> to calculate the gradient (slope) at every single point on the map.</li>
                    <li><strong>Convert & Publish:</strong> Translates these steepness values (e.g., 0° to 45°) into a cost (0-100) and publishes it as an occupancy grid for Nav2 that converts it to costmap internally.</li>
                </ol>
                <p>The process detailed below effectively translates the 2.5D elevation map into a 2D costmap, enabling the planner to account for terrain steepness.</p>
                
                <!-- START: NATIVE TRAVERSABILITY PIPELINE -->

                <!-- Stage 1: Input (Using .two-images-row style) -->
                <div class="two-images-row">
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/rtabmap_pointcloud.png" alt="3D Pointcloud from RTABMap">
                        <figcaption><strong>Input A:</strong> 3D Pointcloud map (For Visualization)</figcaption>
                    </figure>
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/steepness_mapping_elevation.png" alt="2.5D Elevation Map from RTABMap">
                        <figcaption><strong>Input B: (a)</strong> 2.5D Elevation map (Pipeline Input)</figcaption>
                    </figure>
                </div>

                <!-- Flow Arrow -->
                <div class="pipeline-flow-arrow">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>

                <!-- Stage 2: Processing (Using .pipeline-grid style) -->
                <div class="pipeline-grid">
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/steepness_mapping_filled_elevation.png" alt="Gap-filled map">
                        <figcaption><strong>(b)</strong> The Elevation map after filling small gaps</figcaption>
                    </figure>
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/steepness_mapping_smoothed_elevation.png" alt="Smoothed map">
                        <figcaption><strong>(c)</strong> The filled Elevation map after smoothing</figcaption>
                    </figure>
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/steepness_mapping_steepness.png" alt="Steepness gradient plot">
                        <figcaption><strong>(d)</strong> The Steepness Gradient plot (Steepness as Height)</figcaption>
                    </figure>
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/steepness_mapping_steepness_color_smoothed_height.png" alt="Steepness-colored terrain">
                        <figcaption><strong>(e)</strong> Steepness-colored terrain (Steepness as Color)</figcaption>
                    </figure>
                </div>

                <!-- Flow Arrow -->
                <div class="pipeline-flow-arrow">
                    <i class="fa-solid fa-arrow-down"></i>
                </div>

                <!-- Stage 3: Output -->
                    <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/mars-rover/steepness_mapping_steepness_occupancy_grid.png" alt="Final 2D Costmap">
                    <figcaption><strong>(f)</strong> Final 2D Occupancy grid (Published to Nav2)</figcaption>
                </figure>

                <!-- END: NATIVE TRAVERSABILITY PIPELINE -->

                <p>Utilizing Dijkstra's algorithm, the Nav2 planning module generates an optimal path from this costmap. This path is subsequently processed by the controller, which computes and publishes the necessary steering and speed commands to the rover's wheel motor controllers.</p>

                <h4>Impact & Results</h4>
                <p>We conducted three main tests to validate our system:</p>
                <ul>
                    <li><strong>Flat Terrain:</strong> The rover successfully navigated to goal waypoints with an <strong>average positioning error of 0.192m</strong>, well within the 0.55m ERC requirement.</li>
                    <li><strong>Obstacle Avoidance:</strong> Achieved a 50% success rate in a complex indoor course. This test highlighted areas for future tuning, particularly in the controller's recovery behaviors.</li>
                    <li><strong>Hill Climb:</strong> This was the biggest win. The rover successfully mapped and navigated up both a <strong>13-degree and a 24-degree grassy hill</strong>, slowing down on the steep inclines just as designed. This proved our core concept of traversability mapping was effective in a real-world scenario.</li>
                </ul>
                
                <div class="two-images-row ratio-4-3">
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/Test3_13_degree_hill.png" alt="Rover climbing a 13-degree hill">
                        <figcaption>The rover successfully mapping and climbing a 13-degree hill during outdoor tests.</figcaption>
                    </figure>
                    <figure class="bdd100k-image">
                        <img src="images/mars-rover/Test3_24_degree_hill.png" alt="Rover climbing a 24-degree hill">
                        <figcaption>The rover successfully mapping and climbing a 24-degree hill during outdoor tests.</figcaption>
                    </figure>
                </div>

                <p>As a 5-person team, we successfully integrated complex, production-grade robotics software (ROS2, Nav2, RTAB-Map) and developed a novel C++ node to create a capable autonomous navigation system, laying a solid foundation for the rover's future competition success.</p>
            `
    },
    {
        id: 'prosthetic-hand-control',
        title: 'Semi-Autonomous Prosthetic Hand Control',
        category: 'Robotics',
        description: "This project aimed to solve a key challenge in prosthetics: high cognitive load. We designed a semi-autonomous system that uses a 3D reconstructed scene to analyze the environment, predict the user's intended grasp, and assist in the correct hand positioning, leaving only the final confirmation to the user's muscle signals.",
        image: 'images/prosthetic-hand-control/grasp-big-sphere.jpg', 
        date: 'JUNE 12, 2025',
        keyInfo: {
                role: "Robotics & Software Developer (Semester Project)",
                skills: ["Computer Vision", "ROS", "Point Cloud Processing", "3D Scene Reconstruction", "System Integration", "EMG Control"],
                technologies: ["C++", "Python", "ROS", "OpenCV", "Point Cloud Library (PCL)", "Intel RealSense", "Mia Hand", "Myo Armband"],
                goal: "Reduce the cognitive load of prosthetic use by creating a semi-autonomous system that assists with grasp planning using dual-camera vision.",
                result: "Successfully developed and validated key modules, including a robust EMG control interface and a 75% accurate user intent prediction system. The complete modular pipeline was built, providing a solid foundation for future work."
        },
        detailContent: `
            <h4>The Challenge: Reducing Mental Fatigue</h4>
            <p>Advanced prosthetic hands are powerful, but controlling them can be mentally exhausting. Users often have to manually cycle through grip patterns and precisely align the hand, a process that requires a lot of focus (known as <strong>high cognitive load</strong>). This can lead to frustration and high rates of device abandonment.</p>
            <p>Our solution was to develop a <strong>semi-autonomous system</strong>. The user simply points their arm to the object they want to pick up, the hand automatically positions itself, they reach the object and trigger the hand closure with their muscle signals.</p>
            <p>We decided to add an additional camera to the head of the user to <strong>enlarge the field of view</strong> and make it easier to analyze the environment and make the automatic grasping more accurate. In the real life scenario, the camera could be integrated into smart glasses.</p>

            <h4>How It Works: The Vision-to-Grasp Pipeline</h4>
            <p>We built a full-stack robotics system using the <strong>Robot Operating System (ROS)</strong>. The hardware included a <strong>Mia Hand</strong>, a <strong>Myo EMG Armband</strong>, and two <strong>Intel RealSense RGB-D cameras</strong>—one mounted on the user's head and one on the prosthetic hand itself.</p>

            <div class="two-images-row ratio-4-3">
                <figure>
                    <img src="images/prosthetic-hand-control/handmountnocam.jpg" alt="Mia Hand Attached to a Mount">
                    <figcaption>Mia Hand attached to a mount.</figcaption>
                </figure>
                <figure>
                    <img src="images/prosthetic-hand-control/hand_and_emg_band.jpg" alt="Hand Setup">
                    <figcaption>Hand setup: Myo Armband, Mia Hand mount, and Intel RealSense camera with an ArUco marker on its back.</figcaption>
                </figure>
                <figure>
                    <img src="images/prosthetic-hand-control/cam positioning.jpg" alt="User intent prediction module">
                    <figcaption>Participant setup: The head camera detects the ArUco marker on the hand camera.</figcaption>
                </figure>
            </div>

            <p>The process works as follows:</p>

            <ol>
                <li><strong>Aruco Marker Detection:</strong> The head camera detects the ArUco marker attached to the back of the hand camera</li>
                <li><strong>Dual-Camera Point Cloud Merging:</strong> Based on the pose of the detected ArUco marker, the system aligns point clouds from both the head and hand cameras into one pointcloud.</li>
                
                <div class="two-images-row ratio-16-9">
                    <figure>
                        <img src="images/prosthetic-hand-control/pc-one-camera.png" alt="Image from one camera">
                        <figcaption>The image of the scene from the hand camera.</figcaption>
                    </figure>
                    <figure>
                        <img src="images/prosthetic-hand-control/pc-merged.png" alt="User intent prediction module">
                        <figcaption>The merged 3D point cloud from the head and hand cameras, creating a unified scene.</figcaption>
                    </figure>
                </div>

                <li><strong>Object Segmentation:</strong> The merged pointcloud is then processed to find distinct items. We used <strong>LCCP algorithm</strong> (3D point cloud segmentation method) to isolate individual objects such as cups, bottles, and utensils or other items in the scene.</li>
                
                <div class="two-images-row ratio-16-9">
                    <figure>
                        <img src="images/prosthetic-hand-control/object-segmentation-orig.png" alt="The original image of the scene">
                        <figcaption>The original image of the scene.</figcaption>
                    </figure>
                    <figure>
                        <img src="images/prosthetic-hand-control/object-segmentation-pc.png" alt="The segmented pointcloud">
                        <figcaption>The segmented pointcloud. Each segmented object is highlighted with different color. Red spheres represent the center of each object.</figcaption>
                    </figure>
                </div>
                
                <li><strong>Target Estimation:</strong> To know which object to grasp, the system combines three factors: the user's <strong>head gaze direction</strong> (from the head camera), the <strong>hand's pointing direction</strong>, and the <strong>proximity</strong> of the hand to all segmented objects.</li>

                <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/prosthetic-hand-control/pointing_selection.jpg" alt="Target selection visualization">
                    <figcaption>One of the three methods used for target selection. The distance to the closest object is highlighted in green.</figcaption>
                </figure>

                <li><strong>Geometric Model Fitting:</strong> Once the target object is selected, the system uses the <strong>RANSAC</strong> algorithm to fit a simple geometric shape (box, cylinder, or sphere). The best fitting shape is selected.</li>
                
                <div class="two-images-row ratio-16-9">
                    <figure class="bdd100k-image">
                        <img src="images/prosthetic-hand-control/target-sel-orig.png" alt="Scene with a popcorn box.">
                        <figcaption>Scene with a popcorn box.</figcaption>
                    </figure>
                    <figure class="bdd100k-image">
                        <img src="images/prosthetic-hand-control/target-sel.png" alt="Grasp pose estimation on a cuboid">
                        <figcaption>The segmented popcorn box (red) together with a fitted box geometric shape (yellow) and the highlighted side of the box meant for grasping (green).</figcaption>
                    </figure>
                </div>

                <li><strong>Grasp Pose Selection:</strong> Based on the best fitting shape, the appropriate <strong>grasp type</strong> and <strong>wrist orientation</strong> is selected. The appropriate control commands are then sent to the prosthetic hand to automatically adjust its position.</li>

                <li><strong>EMG Signal, Hand Closure:</strong> The user then gives the final "grasp" or "release" command using simple muscle flexes, which are read by the <strong>Myo EMG armband</strong>.</li>
            </ol>

            <h4>Results & Key Outcomes</h4>
            <p>This project successfully combined <strong>multiple cameras</strong> and <strong>muscle signal control</strong>. We built and tested the system's main parts, from building a 3D map of the scene to predicting what object does the user want to grasp. This work provides a solid base for future development in assistive robotics.</p>

            <figure class="bdd100k-image pipeline-output-figure">
                <img src="images/prosthetic-hand-control/safety-force.jpg" alt="Mia Hand delicately grasping a soft box">
                <figcaption>The final system in action, demonstrating a successful grasp of a soft box, triggered by the user's EMG signal.</figcaption>
            </figure>
        `,

    },
    {
        id: 'parking-sensor',
        title: 'Parking Sensor',
        category: 'Electronics',
        description: "Developed an ultrasonic parking sensor system with LED display and speaker.",
        tags: ['Electronics', 'Embedded Systems', 'C', 'Microcontrollers', '3D Printing', 'Circuit Design'],
        image: 'images/parking-sensor/final_up.jpg',
        date: 'MAY 20, 2023',
            keyInfo: {
                role: "Electronics Engineer (Semestral Project)",
                skills: ["Circuit Design", "Microcontroller Programming", "Sensor Integration", "Prototyping", "3D Modeling", "Electronics"],
                technologies: ["ESP32", "Ultrasonic Sensor", "LED Display", "3D Printing", "PlatformIO", "C", "Breadboard", "Transistors", "Voltage Dividers"],
                goal: "Develop a parking sensor system.",
                result: "Successfully built and tested a functional parking sensor that was presented at the university fair for electronics projects."
        },
        detailContent: `
            <h4>Introduction to the Problem</h4>
            <p>For my final semester project, I developed a <strong>parking sensor system</strong>. The exciting thing about electronics is that you can directly see the impact of your work in the real world. Not just as an output on a screen.</p>
            <p>The system mimics the function of a real car's parking sensor: it uses an <strong>ultrasonic sensor</strong> to measure distance and provides escalating visual and auditory feedback to the driver as they approach an obstacle.</p>

            <h4>Implementation Details</h4>
            <p>The core of the system is the <strong>ultrasonic sensor</strong> (HC-SR04), which measures distance using sound waves.</p>

            <figure class="bdd100k-image pipeline-output-figure">
                <img src="images/parking-sensor/ultrasonic_sensor.png" alt="Ultrasonic Sensor">
                <figcaption>The ultrasonic sensor (HC-SR04) with its transmitter (T) and receiver (R).</figcaption>
            </figure>

            <p>The ultrasonic sensor works by emitting a high-frequency sound wave from the transmitter (T) and receiving the reflected wave by the receiver (R). The time it takes for the sound wave to reach the obstacle and return is used to calculate the distance:</p>
            
            <p><em>Distance = (Speed of Sound * Time) / 2</em></p>
            
            <p>The division by 2 accounts for the sound wave's round trip (out and back).</p>

            <figure class="bdd100k-image pipeline-output-figure">
                <img src="images/parking-sensor/ultrasonic_function.png" alt="Ultrasonic Sensor Functionality">
                <figcaption>The principle of operation of the ultrasonic sensor.</figcaption>
            </figure>

            <p>The whole system is controlled by the <strong>ESP32 microcontroller</strong> programmed in C (using PlatformIO). It is responsible for triggering the ultrasonic sensor, calculating the distance, and controlling the user feedback.</p>
            
            <p>I designed the system to provide two forms of real-time feedback:</p>
            <ul>
                <li><strong>Visual Feedback:</strong> An <strong>LED display</strong> clearly shows the distance to the obstacle in centimeters.</li>
                <li><strong>Auditory Feedback:</strong> A <strong>speaker</strong> emits a beeping tone that increases in frequency (beeps faster) as the obstacle gets closer.</li>
            </ul>

            <figure class="bdd100k-image">
                <img src="images/parking-sensor/schema.png" alt="Circuit Diagram">
                <figcaption>The circuit diagram of the ultrasonic sensor system.</figcaption>
            </figure>

            <p>The circuit design addressed two key integration challenges:
                <br><strong>1. Logic Level Shifting:</strong> The ESP32 operates at 3.3V, but the HC-SR04 sensor's echo pin outputs 5V. I used a simple <strong>voltage divider</strong> to safely step down the signal for the ESP32.
                <br><strong>2. High-Current Load:</strong> The speaker requires more current than the ESP32's GPIO pin can safely source. I solved this by using an <strong>NPN transistor</strong> as a low-side switch, allowing the microcontroller's 3.3V pin to control the 5V-powered speaker.</p>

            <p>Finally, I designed a custom enclosure in <strong>Fusion 360</strong> and <strong>3D printed</strong> it to house all the components in a clean, compact prototype.</p>

            <figure class="bdd100k-image pipeline-output-figure">
                <img src="images/parking-sensor/parking_sensor_3D_model.png" alt="3D Model">
                <figcaption>3D model of the custom-designed enclosure.</figcaption>
            </figure>

            <p>The components were assembled using a small breadboard and point-to-point wiring inside the 3D-printed case.</p>

            <figure class="bdd100k-image pipeline-output-figure">
                <img src="images/parking-sensor/open_case.jpg" alt="Inside view of the parking sensor">
                <figcaption>Inside view: ESP32, breadboard, and wiring harness.</figcaption>
            </figure>

            <p>The assembled prototype is a self-contained unit powered by a single USB-C connection.</p>

            <figure class="bdd100k-image pipeline-output-figure">
                <img src="images/parking-sensor/final-product.jpg" alt="Final version of the parking sensor">
                <figcaption>Final version of the parking sensor.</figcaption>
            </figure> 

            <h4>Impact & Results</h4>
            <p>The project successfully resulted in a <strong>fully functional and tested parking sensor system</strong> that delivers accurate, real-time distance feedback.</p>
            <p>This project was an opportunity to develop a comprehensive skill set:</p>
            <ul>
                <li><strong>Full Product Cycle:</strong> From initial concept and <strong>circuit design</strong> to <strong>microcontroller programming</strong> (C), <strong>CAD modeling</strong> (Fusion 360), and final <strong>3D-printed fabrication</strong>.</li>
                <li><strong>Systems Integration:</strong> Solving real-world electronics challenges, including interfacing components with different logic levels (3.3V/5V) and driving higher-current loads (like a speaker) from a microcontroller.</li>
                <li><strong>Public Showcase:</strong> The completed sensor was presented at the university fair for electronics projects.</li>
            </ul>
        `,
    },
    {
        id: 'packet-sending-protocol',
        title: 'Reliable File Transfer over a custom Protocol',
        category: 'Computer Networking',
        description: "Developed a custom network protocol on top of UDP to ensure reliable, in-order file transfer, implementing core features of TCP like error checking, packet sequencing, and flow control.",
        tags: ['Networking', 'Python', 'UDP', 'Sockets', 'Protocol Design', 'Distributed Systems'],
        image: 'images/packet-sending-protocol/packet_sending_cover_photo.jpg',
        date: 'JAN 10, 2024',
        keyInfo: {
            role: "Software Developer (Semester Project)",
            skills: ["Network Protocol Design", "Socket Programming", "Error Control (CRC32)", "Flow Control (Sliding Window)", "Data Integrity (MD5)"],
            technologies: ["Python", "UDP Sockets", "hashlib", "crcmod"],
            goal: "Build a reliable data transfer mechanism on top of the inherently unreliable UDP protocol to ensure complete and accurate file transfer.",
            result: "Successfully implemented a sliding window protocol capable of transferring complete files with error detection, ACK-based re-transmission, and final integrity verification."
        },
        detailContent: `
            <h4>Core Challenge: Building Reliability from Scratch</h4>
            <p>While TCP is the standard for reliable data transfer, this project aimed to build the reliability layer manually as part of a semester project. Using the fast but 'fire-and-forget' <strong>UDP protocol</strong>, the goal was to create a custom sender-receiver system that could transfer a whole file and guarantee it arrived <strong>uncorrupted and in the correct order</strong>, even on an imperfect network.</p>
                    
            <h4>Implementation Details</h4>
            <p>The solution involved creating a custom packet structure and a state-managing sender and receiver.</p>
            
            <ol>
                <li><strong>Packetizing & Error Detection:</strong> The sender first breaks the source file into small, sendable chunks (packets). Each packet is prefixed with an 8-byte packet ID (for ordering the packets) and appended with a <strong>CRC32 checksum</strong> ensuring the data were not corrupted during transmission.</li>
                
                <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/packet-sending-protocol/packet.png" alt="Packet Structure">
                    <figcaption>Custom packet structure with ID, data, and 32-bit CRC checksum.</figcaption>
                </figure>

                <li><strong>Sequencing & Reassembly:</strong> when the receiver receives a packet, it first validates its CRC32 checksum. If valid, it uses the packet ID as an index to place the data in its correct position in a list. This makes it easy to correctly sort the packets, even if they arrive out of order.</li>
                
                <li><strong>ACKs, Timeouts & Re-transmission:</strong> For every piece of data the sender transmits, the receiver sends back an <strong>ACK</strong> message to confirm it arrived safely. The sender maintains a list of all packets it has sent. If an ACK doesn't arrive within a set <strong>timeout</strong>, the sender assumes the packet (or its ACK) was lost and automatically re-sends the packet again.</li>
                
                <li><strong>Flow Control (Sliding Window):</strong> Instead of sending one packet and waiting for confirmation before sending the next (like 'stop-and-wait'), the sender can send several packets at once, keeping a "window" of active packets. As the receiver confirms it got a packet, the sender "slides" its window forward, immediately sending a new packet to keep the data flowing without unnecessary pauses. This allows for continuous transmission and much faster file transfers.</li>

                <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/packet-sending-protocol/selectiverepeatlostframe.png" alt="Sliding Window in action">
                    <figcaption>Sliding window approach in action. The packet number 2 is lost and then re-sent.</figcaption>
                </figure>
                <!-- https://reaksmeylim.github.io/selectiverepeat.html -->

                <li><strong>Final File Integrity:</strong> To ensure the transferred file is 100% identical to the original, both the sender and receiver compute MD5 hashes of their respective files and compare the two to guarantee the received file is identical to the sent one.</li>

                <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/packet-sending-protocol/MD5.png" alt="MD5 Hash Process">
                    <figcaption>MD5 Hash process, taking in stream of bytes (text or image) and producing a 32 character hash value.</figcaption>
                </figure>
            </ol>
            
            <h4>Impact & Results</h4>
            <p>This project was a deep dive into the network protocol design. The final application implements the core logic of TCP (reliability, sequencing, flow control) from the ground up. This project made it possible to get a hands-on experience and a deep understanding of how data moves reliably across distributed systems, which is the bedrock for all high-level web and cloud applications.</p>
        `,
    },
    {
        id: 'adc-pcb-design',
        title: '4-Layer ADC Module for Rocketry Ground Station',
        category: 'Electronics & PCB Design',
        description: "Designed a 4-layer, high-precision analog-to-digital converter (ADC) module for a ground computer used in rocket telemetry.",
        tags: ['PCB Design', 'KiCad', 'Electronics', 'Schematic Capture', 'Signal Integrity', 'Aerospace'],
        image: 'images/adc-pcb-design/3d-model.png', 
        date: 'FEB 23, 2024',
        keyInfo: {
            role: "Electronics Engineer",
            skills: ["Schematic Capture", "PCB Layout", "High-Density Routing", "Modular System Design"],
            technologies: ["KiCad", "DIN 41612 Connectors", "SamacSys Libraries"],
            goal: "Design a robust ADC module for the 'New Instrumentation System' (NIS) ground computer, capable of capturing high-precision analog data in an electrically noisy environment.",
            result: "Delivered the complete, production-ready KiCad project (schematic, layout, and Gerbers) for the ADC module."
        },
        detailContent: `
            <h4>Core Challenge: Designing for Reliability and Precision</h4>
            <p>When being in the CTU Space Research team, I was tasked with designing a component for the rocket's ground computer: the <strong>Analog-to-Digital Converter (ADC) module</strong>. The module was not a standalone gadget; it was a module for the "New Instrumentation System" (NIS), a custom-built ground computer.</p>
            <p>The core challenge was twofold: 1) The board had to be <strong>highly reliable</strong>, therefore a robust DIN 41612 connector was chosen to plug into the system's backplane. 2) The board had to capture clean, high-precision analog signals (from sensors such as load cells and pressure transducers) in an environment filled with "noisy" digital electronics. A simple 2-layer PCB would not be reliable enough.</p>

            <h4>Implementation Details</h4>
            <p>Given the component list and system requirements, I performed the whole design in KiCad.</p>
            
            <ol>
                <li><strong>Schematic Capture:</strong> Initially, I imported the components into a hierarchical schematic in KiCad's schematic editor. This involved logically organizing the design into multiple sub-sheets, including dedicated sheets for the analog input protection circuits and the main backplane connector.</li>

                <figure class="bdd100k-image">
                    <img src="images/adc-pcb-design/schematic.png" alt="Hierarchical Schematic">
                    <figcaption>Hierarchical schematic showing the main module, the input protection and the backplane connector are defined in separate sub-sheets.</figcaption>
                </figure>

                <li><strong>Component Placement & Routing:</strong> I designed a <strong>4-layer PCB</strong> in the PCB editor. The two internal layers were dedicated as solid GND (Ground) planes. This "sandwich" design makes it possible to connect any component instantly to the ground. The 2 layer design would require to route all traces to one common ground, which would require more traces and introduce more noise.</li>

                <li><strong>Component Placement & Routing:</strong> I placed all components, physically separating the "quiet" analog input section (input from the sensors) from the "noisy" digital components (such as the ADC chip and power regulators). All signals were then routed, using the two internal ground planes to provide a short, clean return path for accurate analog measurements.</li>
                
                <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/adc-pcb-design/pcb-editor.png" alt="PCB Editor">
                    <figcaption><strong>PCB Layout:</strong> The ADC chip and power regulators on the left side and the analog input section on the right side.</figcaption>
                </figure>

                <li><strong>Design Verification:</strong> Finally, <strong>Electrical Rule Checks (ERC)</strong> and <strong>Design Rule Checks (DRC)</strong> were performed to guarantee the schematic was logically correct and the physical layout had no manufacturing errors (such as traces being too close).</li>

                <figure class="bdd100k-image pipeline-output-figure">
                    <img src="images/adc-pcb-design/3d-model.png" alt="3D Render">
                    <figcaption><strong>3D Model:</strong> A 3D render from KiCad, showing the final component placement and robust DIN 41612 connector for connecting to the backplane of the ground computer (large green component on the left edge).</figcaption>
                </figure>
            </ol>
            
            <h4>Impact & Results</h4>
            <p>This project was my first time handling the full hardware workflow. I was given a list of components and a set of requirements and was responsible for designing the complete 4-layer PCB from start to finish. The final production files (Gerbers) were then used for manufacturing the PCB and implemented into the "New Instrumentation System" (NIS) ground computer that communicates with the rocket.</p>
            <p>This project made it possible to develop skills in PCB design aimed at reliability and applying analog design principles to a multilayer PCB.</p>
        `,
    },
];
