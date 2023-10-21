<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\CandidatRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=CandidatRepository::class)
 * @ApiResource(formats={"json"})
 */
class Candidat
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $codepostal;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pays;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $gouvernorat;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="candidats")
     *  @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $user;

    /**
     * @ORM\Column(type="integer")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user_id;

    /**
     * @ORM\OneToMany(targetEntity=Candidature::class, mappedBy="candidat", orphanRemoval=true)
     */
    private $candidatures;

    /**
     * @ORM\OneToMany(targetEntity=Formation::class, mappedBy="candidat", orphanRemoval=true)
     */
    private $formations;

    /**
     * @ORM\OneToMany(targetEntity=Langue::class, mappedBy="candidat", orphanRemoval=true)
     */
    private $langues;

    /**
     * @ORM\OneToMany(targetEntity=Experience::class, mappedBy="candidat", orphanRemoval=true)
     */
    private $experiences;

    public function __construct()
    {
        $this->candidatures = new ArrayCollection();
        $this->formations = new ArrayCollection();
        $this->langues = new ArrayCollection();
        $this->experiences = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCodepostal(): ?int
    {
        return $this->codepostal;
    }

    public function setCodepostal(?int $codepostal): self
    {
        $this->codepostal = $codepostal;

        return $this;
    }

    public function getPays(): ?string
    {
        return $this->pays;
    }

    public function setPays(?string $pays): self
    {
        $this->pays = $pays;

        return $this;
    }

    public function getGouvernorat(): ?string
    {
        return $this->gouvernorat;
    }

    public function setGouvernorat(?string $gouvernorat): self
    {
        $this->gouvernorat = $gouvernorat;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    /**
     * @return Collection|Candidature[]
     */
    public function getCandidatures(): Collection
    {
        return $this->candidatures;
    }

    public function addCandidature(Candidature $candidature): self
    {
        if (!$this->candidatures->contains($candidature)) {
            $this->candidatures[] = $candidature;
            $candidature->setCandidat($this);
        }

        return $this;
    }

    public function removeCandidature(Candidature $candidature): self
    {
        if ($this->candidatures->removeElement($candidature)) {
            // set the owning side to null (unless already changed)
            if ($candidature->getCandidat() === $this) {
                $candidature->setCandidat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Formation[]
     */
    public function getFormations(): Collection
    {
        return $this->formations;
    }

    public function addFormation(Formation $formation): self
    {
        if (!$this->formations->contains($formation)) {
            $this->formations[] = $formation;
            $formation->setCandidat($this);
        }

        return $this;
    }

    public function removeFormation(Formation $formation): self
    {
        if ($this->formations->removeElement($formation)) {
            // set the owning side to null (unless already changed)
            if ($formation->getCandidat() === $this) {
                $formation->setCandidat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Langue[]
     */
    public function getLangues(): Collection
    {
        return $this->langues;
    }

    public function addLangue(Langue $langue): self
    {
        if (!$this->langues->contains($langue)) {
            $this->langues[] = $langue;
            $langue->setCandidat($this);
        }

        return $this;
    }

    public function removeLangue(Langue $langue): self
    {
        if ($this->langues->removeElement($langue)) {
            // set the owning side to null (unless already changed)
            if ($langue->getCandidat() === $this) {
                $langue->setCandidat(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|Experience[]
     */
    public function getExperiences(): Collection
    {
        return $this->experiences;
    }

    public function addExperience(Experience $experience): self
    {
        if (!$this->experiences->contains($experience)) {
            $this->experiences[] = $experience;
            $experience->setCandidat($this);
        }

        return $this;
    }

    public function removeExperience(Experience $experience): self
    {
        if ($this->experiences->removeElement($experience)) {
            // set the owning side to null (unless already changed)
            if ($experience->getCandidat() === $this) {
                $experience->setCandidat(null);
            }
        }

        return $this;
    }
}
