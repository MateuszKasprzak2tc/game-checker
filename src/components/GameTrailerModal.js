import { Modal } from "react-bootstrap";

export default function GameTrailerModal({ show, onClose, trailerUrl }) {
  return (
    <Modal show={show} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Game Trailer</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {trailerUrl ? (
          <iframe
            width="100%"
            height="400"
            src={trailerUrl}
            title="Game Trailer"
            allowFullScreen
          />
        ) : (
          <p>No trailer available</p>
        )}
      </Modal.Body>
    </Modal>
  );
}