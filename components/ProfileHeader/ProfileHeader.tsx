import type { Profile } from "../../interfaces/Profile";
import FollowButton from "./FollowButton/FollowButton";
import ProfileStats from "./ProfileStats/ProfileStats";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const ProfileHeader = ({ profile, isOwnProfile }: { profile: Profile; isOwnProfile: boolean }) => {
    return (
        <View style={styles.container}>
            {/* Username centrado arriba de todo */}
            <View style={styles.usernameHeader}>
                <Text style={styles.usernameText}>{profile.username}</Text>
            </View>

            {/* Fila principal: Foto de perfil y Estadísticas */}
            <View style={styles.mainRow}>
                <Image 
                    source={profile.avatar} 
                    style={styles.avatar}
                    alt={`${profile.name}'s avatar`} 
                />
                
                <View style={styles.statsContainer}>  
                <Text style={styles.name}>{profile.name}</Text>
                    <ProfileStats 
                        followers={profile.followers} 
                        following={profile.following} 
                        posts={profile.postsCount} 
                    />
                </View>
            </View>

            {/* Información del perfil: Nombre (en bold) y Bio (separada) */}
            <View style={styles.infoContainer}>
                {profile.bio ? <Text style={styles.bio}>{profile.bio}</Text> : null}
            </View>

            {/* Botones de acción (Editar perfil o Seguir) */}
            <View style={styles.actionContainer}>
                {isOwnProfile ? (
                    <Pressable style={styles.editButton}>
                        <Text style={styles.editButtonText}>Editar perfil</Text>
                    </Pressable>
                ) : (
                    <FollowButton profileId={profile.id} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingTop: 10, // Ajustado para el header
        paddingBottom: 12,
        backgroundColor: '#fff',
    },
    // Estilos para el username centrado
    usernameHeader: {
        alignItems: 'center',
        marginBottom: 15, // Espacio con la fila principal
    },
    usernameText: {
        fontWeight: '700',
        fontSize: 15,
        color: '#000',
    },
    // Fila principal (avatar + stats)
    mainRow: {
        flexDirection: 'row',
        alignItems: 'center',
        // Quitamos el justifyContent: 'space-between' aquí, ya que el avatar va a la izquierda y las stats ocupan el resto.
    },
    avatar: {
        // Avatar reducido a 78x78px (casi 90dp estandar)
        width: 78,
        height: 78,
        borderRadius: 39,
        backgroundColor: '#e1e1e1',
    },
    statsContainer: {
        flex: 1,
        marginLeft: 30, // Espacio entre avatar y stats
    },
    infoContainer: {
        marginTop: 12,
    },
    name: {
        fontWeight: '600',
        fontSize: 15,
        color: '#262626',
    },
    bio: {
        fontSize: 14,
        color: '#262626',
        marginTop: 2, // Ajustado para que el nombre esté apenas arriba de la bio
    },
    actionContainer: {
        marginTop: 15,
        flexDirection: 'row',
    },
    // Botón Editar Perfil modificado (menos alto, fondo más oscuro, borde apenas redondeado)
    editButton: {
        flex: 1,
        backgroundColor: '#ebebeb', // Fondo gris más oscuro
        paddingVertical: 5, // Menos alto (era 7)
        borderRadius: 5, // Borde apenas redondeado (era 6)
        alignItems: 'center',
        justifyContent: 'center',
    },
    editButtonText: {
        fontWeight: '600',
        color: '#000', // Texto negro
        fontSize: 14,
    },
});

export default ProfileHeader;