const crypto = require('crypto');

// Given SHA-256 hash
const targetHash = "06de973bb45531d52cdbd483c5e50bcddaa2095f9515e03cfad490061cc9831e";

// Function to generate SHA-256 hash
function sha256Hash(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}

// Brute-force attack for 3-digit numbers (000-999)
for (let number = 0; number < 1000; number++) {
    let password = number.toString().padStart(3, '0'); // Convert to 3-digit format
    let hashedPassword = sha256Hash(password); // Generate hash

    if (hashedPassword === targetHash) { // Compare with target hash
        console.log(`✅ Password found: ${password}`);
        break; // Stop when found
    }
}
