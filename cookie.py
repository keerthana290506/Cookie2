import hashlib

# Given SHA-256 hash
target_hash = "06de973bb45531d52cdbd483c5e50bcddaa2095f9515e03cfad490061cc9831e"

# Function to hash a given text using SHA-256
def sha256_hash(text):
    return hashlib.sha256(text.encode()).hexdigest()

# Brute-force attack for 3-digit numbers (000 to 999)
for number in range(1000):  # Loop through 000 to 999
    password = str(number).zfill(3)  # Ensures 3-digit format (e.g., 001, 050, 463)
    hashed_password = sha256_hash(password)  # Generate SHA-256 hash
    if hashed_password == target_hash:  # Compare with given hash
        print(f"Password found: {password}")  # If matched, print and exit
        break
