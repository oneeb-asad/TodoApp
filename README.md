# TodoApp
The Todo App is a simple task management application that allows users to organize their tasks efficiently. It provides various features to help users manage their tasks effectively.

## Features

### Task Management

- **Add New Tasks:** Users can easily add new tasks to their to-do list by adding through an add button, including details like task names, dates, notes, and categories or projects.

- **Mark Tasks as Completed:** Users can mark tasks as completed when they finish them by swiping right, helping them track their progress.

- **Delete Tasks:** If a task is no longer relevant, users can delete it from their to-do list by swiping left.

- **View All Tasks:** Users can view a comprehensive list of all tasks on their to-do list by interacting with tab navigation, ensuring they have a clear overview of their pending and completed tasks.

- **Filter by Completion Status:** Users can filter tasks based on their completion status by interacting with tab navigation, making it easier to focus on either completed or incomplete tasks.

- **Sort by Date:** Tasks can be sorted based on their due dates by clicking the sort by date button, allowing users to prioritize their work.

### Data Persistence

- **Persistent Data:** The app stores and persists user data between sessions using redux-toolkit. Even if the user closes the app, their to-do list remains intact when they return.

### Task Enhancements

- **Add Notes or Descriptions:** Users can add detailed notes or descriptions to tasks, providing additional context or instructions for each task.

## Getting Started

### Prerequisites

Before using the Todo App, ensure you have react native installed on your system.

### Installation

1. After forking the project you need to install node modules to run the app on Android and you need to install pods to run the app on iOS.
   
2. For node modules run the following command
- npm i or yarn
  
3. For pods you first need to go to your iOS project by this command:
- cd ios

4. After landing in the iOS project run this command:
- **pod install

5. After the above execute these commands to run the project on both Android and iOS:

- For Android
npx react-native run-android or yarn android

- For iOS
npx react-native run-ios or yarn ios
