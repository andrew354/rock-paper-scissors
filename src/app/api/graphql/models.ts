import mongoose from 'mongoose';

const totalGameScoreSchema = new mongoose.Schema({
	playerAScore: { type: Number },
	playerBScore: { type: Number },
	tieScore: { type: Number },
	numberGamePlayed: { type: Number },
	maxGamesNumber: { type: Number },
});

export const TotalGameScoreModel =
	mongoose.models.TotalGameScore ||
	mongoose.model('TotalGameScore', totalGameScoreSchema);
