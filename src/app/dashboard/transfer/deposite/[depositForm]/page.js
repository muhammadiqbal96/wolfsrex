
export default function page({ params }) {
    let id = params.depositForm;
    let indexOfTitle = id.indexOf("4");
    let price = id.slice(indexOfTitle + 1, id.length);
    let title = id.slice(0, indexOfTitle - 5)
    return (
        <div style={{ padding: "130px 30px 70px 120px", backgroundColor: "#0f051d", color: "white" }}>
            {title}
            <br />
            ${price}
        </div>
    )
}
