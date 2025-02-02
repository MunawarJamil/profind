import mongoose , { Schema } from 'mongoose';
 

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
     

        // avatar: {
        //     type: String,
        //     default: 'https://res.cloudinary.com/dxkufsejm/image/upload/v1628589243/avatar/avatar_cugq40.png',
        // },
        // about: {
        //     type: String,
        //     trim: true,
        // },
       
     
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
