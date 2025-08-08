import React from 'react';
import { Link } from 'react-router';

const VolunteerCard = ({ volunteer }) => {
    const { _id, thumbnail, postTitle, volunteersNeeded, organizerName, organizerEmail } = volunteer;

    return (
        <div className="w-full max-w-sm mx-auto  rounded-xl shadow-sm">
            <div className="p-4">
                <figure className="w-full mb-4">
                    <img
                        src={thumbnail}
                        alt={postTitle}
                        className="w-full h-48 object-cover rounded-lg"
                    />
                </figure>
                <div className="space-y-2">
                    <h2 className="text-xl font-bold">{postTitle}</h2>
                    <p className="text-base"><span className="font-semibold">Volunteers Needed:</span> {volunteersNeeded}</p>
                    <p className="text-base"><span className="font-semibold">Organizer Name:</span> {organizerName}</p>
                    <p className="text-base"><span className="font-semibold">Organizer Email:</span> {organizerEmail}</p>

                    <div className="text-right pt-4">
                        <Link to={`/volunteerDetails/${_id}`}>
                            <button className="btn btn-primary btn-sm">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerCard;
