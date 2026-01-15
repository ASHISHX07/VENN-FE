const useToggle = (element, toRemove, toRemove2, toAdd) => {
    const e = document.querySelector(element);

    if (e.classList.contains(toRemove)) {
        e.classList.remove(toRemove);
    }
    if (e.classList.contains(toRemove2)) {
        e.classList.remove(toRemove2);
    }
    e.classList.add(toAdd);
}

export default useToggle;