import { useEffect, useRef } from 'react';
import { createLayout, utils } from 'animejs';
import "../assets/css/modal.css"

function Modal({ itemName1, itemDesc1, itemName2, itemDesc2, itemName3, itemDesc3 }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const $dialog = dialogRef.current;
        if (!$dialog) return;

        // Create the modal layout by setting the dialog as the root
        // Since the elements are not yet part of the modal root, it's necessary to specify all animated children
        // to tell the layout what to look for during an update
        const modalLayout = createLayout($dialog, {
            children: ['.item', 'h2', 'h3', 'p'],
            properties: ['--overlay-alpha'],
        });

        const buttons = document.querySelectorAll('.button.item');

        const closeModal = (e) => {
            let $item;
            modalLayout.update(({ root }) => {
                $dialog.close();
                $item = Array.from(buttons).find(item => item.classList.contains('is-open'));
                if ($item) {
                    $item.classList.remove('is-open'); // Makes the clicked element visible again
                    $item.focus(); // Focus to the closed element to preserve the keyboard navigation flow
                }
            });
        };

        const openModal = e => {
            const $target = e.target;
            const $item = $target.closest('.item');
            const $clone = $item.cloneNode(true);
            $dialog.innerHTML = ''; // Make sure old clones are removed from the modal before adding a new one
            $dialog.appendChild($clone); // Append the clicked element clone to the modal
            modalLayout.update(() => {
                $dialog.showModal(); // Open the modal
                $item.classList.add('is-open'); // Hide the clicked element
            }, {
                duration: parseInt($item.dataset.duration) // Custom duration depending of the button clicked
            });
        };

        buttons.forEach($button => $button.addEventListener('click', openModal));
        $dialog.addEventListener('cancel', closeModal);
        $dialog.addEventListener('click', closeModal);

        return () => {
            buttons.forEach($button => $button.removeEventListener('click', openModal));
            $dialog.removeEventListener('cancel', closeModal);
            $dialog.removeEventListener('click', closeModal);
        };
    }, []);

    return (
        <div id="layout-usage-animate-modal-dialog" className="large layout centered row">
            <div className="layout-container col grid-layout row">
                <button data-layout-id="A" data-duration="500" className="button item col">
                    <h2 data-layout-id="A-title">{itemName1}</h2>
                    <p>{itemDesc1}</p>
                </button>
                <button data-layout-id="B" data-duration="500" className="button item col">
                    <h2 data-layout-id="B-title">{itemName2}</h2>
                    <p>{itemDesc2}</p>
                </button>
                <button data-layout-id="C" data-duration="500" className="button item col">
                    <h2 data-layout-id="C-title">{itemName3}</h2>
                    <p>{itemDesc3}</p>
                </button>
            </div>
            <dialog ref={dialogRef} id='layout-dialog'></dialog>
        </div>
    );
}
export default Modal;