import {
    SpinnerContainer,
    SpinnerBackground,
    Loader
} from './styled';

export function Spinner() {
	return (
        <>
            <SpinnerContainer>
                <SpinnerBackground>
                    <Loader />
                </SpinnerBackground>
            </SpinnerContainer>
        </>
    );
}