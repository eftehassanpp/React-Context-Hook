export default function ClickCounter({ count, incrementCounter }) {
    return (
        <>
            <button onClicked={incrementCounter}>Clicked {count} times</button>
        </>
    );
}
