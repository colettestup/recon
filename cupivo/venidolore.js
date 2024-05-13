function shuffleArray(profiles) {
    // Assuming 'profiles' is an array of profile objects
    for (let i = profiles.length - 1; i > 0; i--) {
        // Generate a random index between 0 and i
        const j = Math.floor(Math.random() * (i + 1));
        
        // Swap elements at indices i and j
        [profiles[i], profiles[j]] = [profiles[j], profiles[i]];
    }
    return profiles;
}

// Usage:
// const profiles = [...]; // An array of profile objects
// const shuffledProfiles = shuffleArray(profiles);
