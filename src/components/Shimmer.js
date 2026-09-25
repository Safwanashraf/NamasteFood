const Shimmer = () => (
    <>
        {Array.from({ length: 12 }, (_, index) => (
            <div className="res-card shimmer-card" key={index} aria-hidden="true">
                <div className="res-card-image shimmer-block" />
                <div className="shimmer-line shimmer-name" />
                <div className="shimmer-line shimmer-rating" />
                <div className="shimmer-line shimmer-item" />
                <div className="shimmer-line shimmer-address" />
            </div>
        ))}
    </>
);

export default Shimmer;
