import { Component } from "react";
import axios from "axios";
import Cardmovie from "../../component/Cardmovie";
import Modal from "../../component/Modal";

interface MoviesState {
  data: [];
  loading: boolean;
  page: number;
  index: number;
}
class Movies extends Component<MoviesState> {
  state = {
    data: [],
    loading: false,
    page: 1,
    index: 1,
  };
  getNowPlaying(page: number) {
    console.log("page : ", page);
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWQ4NTE0ZmViMzI4YzZiNzhhZWY1YzEyNjE3NDIwOSIsInN1YiI6IjYxYTgzYzhhODc1ZDFhMDA4YjU4OWJhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.19IVAC2nzdtIHIPkcEN5sK0QBGIRwKyUmtUF_2QJiO0`,
          },
        }
        )
        .then((response) => {
          this.setState({ loading: true });
          this.setState({ data: response?.data?.results });
          this.setState({ page: response?.data?.page });
          console.log(response?.data?.page);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    async getPrevious() {
      const { page } = this.state;
      if (page > 1) {
        await this.getNowPlaying(page - 1);
      }
    }
    async getNext() {
      const { page } = this.state;
      await this.getNowPlaying(page + 1);
    }
    componentDidMount(): void {
      const { index } = this.state;
      this.getNowPlaying(index);
    }

    render() {
      const { data, loading, page } = this.state;
      return (
        <section className="flex flex-col justify-center">
          <div className="flex flex-row mx-auto my-10">
            <button
              className={`${
                page <= 1
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-blue-500 text-white"
              } focus:outline-none w-40 mr-5`}
              onClick={() => this.getPrevious()}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white focus:outline-none w-40 ml-5"
              onClick={() => this.getNext()}
            >
              Next
            </button>
          </div>
          <div className="m-5 grid grid-cols-5 gap-x-5 gap-y-10">
            {data && loading === true ? (
              data.map((item: any, index) => {
                return (
                  <Cardmovie
                    key={index}
                    id={item?.id.toString()}
                    title={item?.title}
                    poster_path={item?.poster_path}
                    vote_average={item?.vote_average}
                  />
                );
              })
            ) : (
              <Modal isOpen={true}>
                <div className="w-40 text-center my-20">
                  <p className="font-semibold">Please wait ...</p>
                </div>
              </Modal>
            )}
          </div>
        </section>
      );
    }
  }
  export default Movies;