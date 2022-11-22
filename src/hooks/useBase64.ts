const useBase64 = () => {
  const decodeBase64 = (src: string) => {
    return decodeURIComponent(window.atob(src))
  }

  return { decodeBase64 }
}

export default useBase64
