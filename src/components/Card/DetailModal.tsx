import { AnimatePresence, motion } from "framer-motion";
import { CarType } from "../../types";

type DetailPropsType = {
  isOpen: boolean;
  closeModal: () => void;
  car: CarType;
};

const DetailModal = ({ isOpen, closeModal, car }: DetailPropsType) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-25 z-20 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="p-6 relative bg-white w-full max-w-lg max-h-[90vh] rounded-2xl flex flex-col gap-5 shadow-xl overflow-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="cursor-pointer p-1 absolute end-1 top-1 z-10 bg-white rounded-full"
              >
                <img src="/close.svg" alt="close" />
              </button>
              {/* todo > photos */}
              <div></div>

              {/* car informations */}
              {Object.entries(car).map(([key, value]) => (
                <div className="flex justify-between ">
                  <h4 className="capitalize text-gray">
                    {key.replace("_", "")}
                  </h4>
                  <p className="text-black-100 font-semibold">{value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DetailModal;
