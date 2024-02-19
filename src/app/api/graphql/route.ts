import mongoose from 'mongoose';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { ApolloServer } from '@apollo/server';
import { NextRequest } from 'next/server';
import resolvers from './resolver';
import typeDefs from './schema';

const uri = process.env.NEXT_PUBLIC_MONGODB_URI;

const connectDB = async () => {
	try {
		if (uri) {
			await mongoose.connect(uri);
			console.log('Connected to database successfully');
		}
	} catch (error) {
		console.error(error);
	}
};
connectDB();

const server = new ApolloServer({
	typeDefs,
	resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
	context: async (req) => ({ req }),
});

export async function GET(request: NextRequest) {
	return handler(request);
}
export async function POST(request: NextRequest) {
	return handler(request);
}
