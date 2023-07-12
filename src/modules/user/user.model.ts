// auth/user.model.ts
import { Schema, Document, model } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
}

export const UserSchema = new Schema<User>({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export const UserModel = model<User>('User', UserSchema);
