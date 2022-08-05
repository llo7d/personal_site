import React from 'react'

const ProfileInformation = () => {
    return (
        <div>
            <div className="p-7 block-section">
                <h2 className="block-title">Information</h2>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <div className="text-gray-400">Location</div>
                        <div className="font-medium text-right text-gray-600">
                            London
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-400">Experience</div>
                        <div className="font-medium text-right text-gray-600">
                            3+ years
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-400">Availability</div>
                        <div className="font-medium text-right text-gray-600">
                            1 week
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-400">Relocation</div>
                        <div className="font-medium text-right text-gray-600">No</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInformation