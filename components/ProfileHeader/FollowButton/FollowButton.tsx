import { useEffect, useState } from "react";
import { Pressable, Text } from "react-native";

const FollowButton = ({ profileId,
}: {
    profileId: string;
}) => {

    const [isFollowing, setIsFollowing] =
        useState(false);

    useEffect(() => {
        const savedValue =
            localStorage.getItem(
                `following-${profileId}`
            );

        setIsFollowing(savedValue === "true");
    }, [profileId]);

    const handleClick = () => {
        const newValue = !isFollowing;
        setIsFollowing(newValue);
        localStorage.setItem(
            `following-${profileId}`,
            String(newValue)
        );
    };

    return (
        <Pressable
            onPress={handleClick}
        >
            <Text>

            {isFollowing ? "Following" : "Follow"}
            </Text>
        </Pressable>
    );
};

export default FollowButton;