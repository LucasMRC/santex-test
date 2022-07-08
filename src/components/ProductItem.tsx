// Components
import {
    Card,
    CardBody,
    CardHeader,
    CardImage,
    CardTitle
} from './styled';

// Types
import { Item } from "../types";

export function ProductItem({ item, openModal }: { item: Item, openModal: () => void }) {

    return (
        <Card
            onClick={openModal}
        >
            <CardImage
                src={item.pictureLink}
                alt={item.slug}
            />
            <CardBody>
                <CardHeader>
                    <CardTitle>
                        {item.name}
                    </CardTitle>
                </CardHeader>
            </CardBody>
        </Card>
    );
};