// utils/cleanupDatabase.js - Database cleanup script

const mongoose = require('mongoose');
const Show = require('../models/Show');
const Movie = require('../models/Movie');
require('dotenv').config();

const cleanupDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB for cleanup');

    // Find all shows
    const allShows = await Show.find();
    console.log(`Found ${allShows.length} total shows`);

    let orphanedShows = 0;
    let validShows = 0;

    // Check each show for valid movie reference
    for (const show of allShows) {
      const movie = await Movie.findById(show.movie);
      
      if (!movie) {
        console.log(`Deleting orphaned show: ${show._id} (movie: ${show.movie})`);
        await Show.findByIdAndDelete(show._id);
        orphanedShows++;
      } else {
        validShows++;
      }
    }

    console.log(`\nCleanup Results:`);
    console.log(`- Valid shows: ${validShows}`);
    console.log(`- Orphaned shows deleted: ${orphanedShows}`);
    console.log(`- Total shows after cleanup: ${validShows}`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log('\nDatabase cleanup completed successfully!');
    
    return {
      validShows,
      orphanedShows,
      totalDeleted: orphanedShows
    };

  } catch (error) {
    console.error('Error during database cleanup:', error);
    process.exit(1);
  }
};

// Run cleanup if this file is executed directly
if (require.main === module) {
  cleanupDatabase()
    .then(() => {
      console.log('Cleanup script finished');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Cleanup script failed:', error);
      process.exit(1);
    });
}

module.exports = cleanupDatabase;