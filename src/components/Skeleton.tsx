import { SkeletonCard } from "./styled";

export function Skeleton() {
    return (
        <>
            {new Array(20).fill('*').map((_, i) => (
                <SkeletonCard
                    key={i}
                />
            ))}
        </>
    );
}