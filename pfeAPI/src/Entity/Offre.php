<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\OffreRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Gedmo\Mapping\Annotation as Gedmo;

/**
 * @ORM\Entity(repositoryClass=OffreRepository::class)
 * @ApiResource(formats={"json"})
 */
class Offre
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $poste;

    /**
     * @ORM\Column(type="integer")
     */
    private $agemax;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $experience;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $diplome;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mission;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $competence;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $atouts;

    /**
     * @ORM\Column(type="integer")
     */
    private $statusoff;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="create")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime")
     * @Gedmo\Timestampable(on="update")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="offres")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $agent;

    /**
     * @ORM\Column(type="integer")
     * @ORM\JoinColumn(name="agent_id", referencedColumnName="id")
     */
    private $agent_id;

    /**
     * @ORM\OneToMany(targetEntity=Candidature::class, mappedBy="offre", orphanRemoval=true)
     */
    private $candidatures;

    public function __construct()
    {
        $this->candidatures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(string $poste): self
    {
        $this->poste = $poste;

        return $this;
    }

    public function getAgemax(): ?int
    {
        return $this->agemax;
    }

    public function setAgemax(int $agemax): self
    {
        $this->agemax = $agemax;

        return $this;
    }

    public function getExperience(): ?string
    {
        return $this->experience;
    }

    public function setExperience(string $experience): self
    {
        $this->experience = $experience;

        return $this;
    }

    public function getDiplome(): ?string
    {
        return $this->diplome;
    }

    public function setDiplome(string $diplome): self
    {
        $this->diplome = $diplome;

        return $this;
    }

    public function getMission(): ?string
    {
        return $this->mission;
    }

    public function setMission(string $mission): self
    {
        $this->mission = $mission;

        return $this;
    }

    public function getCompetence(): ?string
    {
        return $this->competence;
    }

    public function setCompetence(string $competence): self
    {
        $this->competence = $competence;

        return $this;
    }

    public function getAtouts(): ?string
    {
        return $this->atouts;
    }

    public function setAtouts(string $atouts): self
    {
        $this->atouts = $atouts;

        return $this;
    }

    public function getStatusoff(): ?int
    {
        return $this->statusoff;
    }

    public function setStatusoff(int $statusoff): self
    {
        $this->statusoff = $statusoff;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getAgent(): ?Agent
    {
        return $this->agent;
    }

    public function setAgent(?Agent $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function getAgentId(): ?int
    {
        return $this->agent_id;
    }

    public function setAgentId(int $agent_id): self
    {
        $this->agent_id = $agent_id;

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
            $candidature->setOffre($this);
        }

        return $this;
    }

    public function removeCandidature(Candidature $candidature): self
    {
        if ($this->candidatures->removeElement($candidature)) {
            // set the owning side to null (unless already changed)
            if ($candidature->getOffre() === $this) {
                $candidature->setOffre(null);
            }
        }

        return $this;
    }
}
