async function startAdventure() {
    const adventureText = document.getElementById('adventure-text');
    
    // Simulate fetching data or processing
    adventureText.innerHTML = 'You find yourself at the entrance of an ancient forest.';
    
    // Simulate asynchronous delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    adventureText.innerHTML += '<br>You spot a mysterious trail leading deeper into the woods.';
}