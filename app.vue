<template>
  <div class="header">
    <div class="home-button">
      <span>
        {{ `${'</>'}` }}
      </span>
      <span class="text">
        {{'Carlos Robert Estrada Resume'}}
      </span>
    </div>
    <div class="navigation-bar">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#download">Download</a></li>
      </ul>
    </div>
  </div>
  <div class="body">
  </div>
</template>
<style>
body {
  margin: 0;
  background-color: #111;
  font-family: 'Courier New', Courier, monospace;
  font-size: 20px;
  color: white;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .home-button {
    padding: 14px 16px;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .navigation-bar {
    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
      overflow: hidden;
      background-color: #111;
    }
    li {
      float: left;
    }
    li a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
    li a:hover:not(.active) {
      background-color: #111;
    }
  }
  
}
.body {
  color: white;
  display: flex;
  flex-direction: column;
}

.text {
  width: 28ch;
  border-right: 3px solid;
  animation: blink 1s step-end infinite, type 2.5s steps(28) forwards;
  overflow: hidden;
  white-space: nowrap;
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

@keyframes type {
  0% {
    width: 0;
  }
}
</style>