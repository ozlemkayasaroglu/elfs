import { useState } from 'react';

function ModalButton() {
  const [modalOpen, setModalOpen] = useState(false);







  return (
    <div className="flex items-center">
      {/* Button */}
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className="rounded-full bg-emerald-300 p-2 text-white shadow-xl hover:bg-emerald-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <svg
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
        </svg>
      </button>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity">
          <div className="fixed inset-0 z-10 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-sm mx-auto">
              <div className="flex items-center justify-center">
                <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <h3 className="text-base font-semibold ml-2" id="modal-title">Payment successful</h3>
              </div>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur amet labore.</p>
              <div className="mt-5">
                <button onClick={() => setModalOpen(false)} type="button" className="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back to dashboard</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalButton;
