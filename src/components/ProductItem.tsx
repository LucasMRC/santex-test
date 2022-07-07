// Components
import {
    Card,
    CardBody,
    CardHeader,
    CardImage,
    CardButton,
    CardTitle
} from './styled';

// Types
import { Item } from "../types";

export function ProductItem({ item, openModal }: { item: Item, openModal: () => void }) {

    return (
        <Card>
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
            <CardButton
                onClick={openModal}
            >
                Open
            </CardButton>
        </Card>
    );
};