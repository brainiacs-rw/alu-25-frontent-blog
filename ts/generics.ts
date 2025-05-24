class Component<T> {
    props: T

    constructor(props: T) {
        this.props = props
    }
}

// button component
interface BlueButtonProps {
    title: string,
}


let component1 = new Component<BlueButtonProps>({ title: 'Click here !' })