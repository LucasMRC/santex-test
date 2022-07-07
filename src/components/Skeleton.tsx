import { SkeletonCard } from "./styled";

export function Skeleton() {
    return (
        <>
            {new Array(15).fill('*').map(_ => (
                <SkeletonCard />
            ))}
        </>
    );
}