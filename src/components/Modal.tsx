// Components
import {
    ModalContaier,
    ModalContent,
    ModalTitle,
    ModalImage,
    ModalCloseButton,
    ModalHeader,
    ModalPrice,
    ModalActionButton
} from './styled';

// Types
import { Item } from "../types";
import { formatPrice } from '../helpers/index';

interface Props {
    item: Item;
    closeModal: () => void;
    addItemToOrder: (item: Item) => void;
};

export function Modal({ item, closeModal, addItemToOrder }: Props) {
    return (
        <ModalContaier>
            <ModalContent>
                <ModalHeader>
                    <ModalCloseButton
                        onClick={closeModal}
                    >
                        &#10060;
                    </ModalCloseButton>
                    <ModalTitle>
                        {item.name}
                    </ModalTitle>
                </ModalHeader>
                <ModalImage
                    src={item.pictureLink}
                    alt={item.slug}
                />
                <ModalPrice>
                    {formatPrice(item.price)}
                </ModalPrice>
                {item.description}
                <ModalActionButton
                    onClick={() => addItemToOrder(item)}
                >
                    Add to chart
                </ModalActionButton>
            </ModalContent>
        </ModalContaier>

    );
};